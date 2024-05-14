import React, { useEffect, useRef, useState } from 'react';
import { DeviceBuilder, DeviceTracking, ElementBuilder, TemplateBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { RootState } from '../../../../store';
import { connect } from 'react-redux';
import { applyConversionRatio } from '../../../../helpers/functions';
import { TicketCard } from './ticketCard';
import { ExampleCaller } from './exampleCaller';
import { SocketApi } from '../../../../helpers';
import { EntityTreeUuid, RtMessageDTO, Ticket, TicketStates, User, UserFB } from '@fluyappgo/commons';
import { DevicesActions } from '../../../../store/devices/action';
import { createUseStyles } from 'react-jss'
import { EntityActions } from '../../../../store/entity/action';


type Props = {
    element: ElementBuilder;
    template: TemplateBuilder;
    device: DeviceBuilder;
    getDeviceTracking: Function;
    deviceTracking: DeviceTracking;
    user: UserFB;
    tts: Function;
    getAgentsByEntityUuid: Function;
}


export const Index: React.FC<Props> = (props) => {

    const { element, template, device, getDeviceTracking, deviceTracking, user, tts, getAgentsByEntityUuid } = props;

    const [ticketOnScreen, setTicketOnScreen] = useState<Ticket[]>([])
    const [ticketOnSpeaking, setTicketOnSpeaking] = useState<Ticket[]>([])
    const [isSpeaking, setIspeaking] = useState(false)
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(true)
    const audiox = useRef<any>(null)


    const css = element?.css ? applyConversionRatio(element.css, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}
    const cssModule = element.moduleCss ? applyConversionRatio(element.moduleCss, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}
    const cssTicket = element.ticketCss ? applyConversionRatio(element.ticketCss, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}
    const gridCss = element.gridCss ? element.gridCss : {}
    
    const [ready, setReady] = useState(false);
    const [config, setConfig] = useState<any>({});

    const log = (data: string) => {
        (window as any).ipcRenderer.send("log", data);
    };

    const listen = () => {
        (window as any).ipcRenderer.onResponse((json: any) => {
            setConfig(json);
            setReady(true);
        });
        (window as any).ipcRenderer.send("readconfig", {});
    };


    const getInit = async () => {
        const response = await getDeviceTracking({ deviceUuid: config.deviceUuid, branchUuid: config.branchUuid });
        if (response.type == 'GET_DEVICE_TRACKING/fulfilled') {
            setTicketOnScreen(response?.payload?.tickets || [])
        }
    }

    useEffect(() => {
        listen();
        return () => {
        };
    }, []);

    
    useEffect(() => {

        console.log(isSpeaking, ticketOnSpeaking)
        action()

    }, [ticketOnSpeaking, isSpeaking])


    useEffect(() => {

        if (ready) {

            getInit()
            setTimeout(() => {
                setLoading(false)
            }, 500);
        }

    }, [ready])


    async function playRing() {

        var audio: any = document.getElementById('audiox');

        await new Promise(function (resolve, reject) {
            audio.src = 'https://s3.amazonaws.com/fluyapp.com/img/ring.mp3';
            audio.load();
            audio.addEventListener("error", reject);
            audio.addEventListener("ended", resolve);
            audio.play();
        });
    }

    async function playSound(response: any) {

        var audio: any = document.getElementById('audiox');

        await new Promise(function (resolve, reject) {
            audio.src = 'data:audio/ogg;base64,' + response.payload;
            audio.load();
            audio.addEventListener("error", reject);
            audio.addEventListener("ended", resolve);
            audio.play();

        });
    }

    const speakTicket = async (ticket: Ticket) => {


        if (isSpeaking || !ticket?.uuid) {
            return ''
        }

        if (element?.playRing) {
            await playRing()
            return;
        }


        let xxxx = ''


        if (element?.callByName && ticket?.subscriber?.name) {
            xxxx = `${ticket?.subscriber?.name} ${ticket?.subscriber?.lastname}, pase a ${ticket?.agent?.label || ticket?.agent?.alias}.`;
        } else {
            xxxx = `Turno ${ticket?.ticketLabel}, pase a ${ticket?.agent?.label || ticket?.agent?.alias}.`;
        }

        if (element?.remoteVoice) {

            const datax = { text: xxxx, locale: 'es-ES' }
            const response = await tts(datax)
            var audio: any = document.getElementById('audiox');
            if (audio) {
                await playSound(response);
            }

        } else {

            speechSynthesis.cancel();

            const utterance = new SpeechSynthesisUtterance(xxxx);
            var voices = speechSynthesis.getVoices();
            console.log("voices", voices)
            utterance.lang = 'es';
            utterance.pitch = 1.100000023841858
            utterance.rate = 0.699999988079071
            await new Promise(function (resolve) {
                utterance.onend = () => {
                    setIspeaking(false)
                    resolve(true)
                };
                speechSynthesis.speak(utterance);
            });

        }



    }

    const action = async () => {
        if (!isSpeaking && ticketOnSpeaking.length > 0) {
            console.log('1')
            const tickets = ticketOnSpeaking.filter((aa, i) => i == 0);
            if (tickets.length > 0) {
                console.log('2')
                setTicketOnSpeaking(oldArray => oldArray.filter((aa, i) => i !== 0));
                setIspeaking(true);
                await speakTicket(tickets[0]);
                setIspeaking(false)
                console.log('3')
            }

        }
    }


    useEffect(() => {

        let socketApi = SocketApi('https://fluyapp.com/socket/events/')


        const data: RtMessageDTO = {
            uuid: device?.useTemplates ? `${device?._id}-${config.branchUuid}-DEVICE` : `${device?._id}-DEVICE`,
            user: user
        }

        socketApi.join(data, () => { })
        socketApi.done(async (data: any) => {
            const ticket: Ticket = data.data.ticket;

            console.log(ticket);

            if ([TicketStates.CALLING].includes(ticket.status || TicketStates.ABANDONED)) {
                setTicketOnScreen(prevArray => [ticket, ...prevArray.filter((tkt) => ticket.uuid != tkt.uuid)]);
                setTicketOnSpeaking(prevArray => [...prevArray.filter((tkt) => ticket.uuid != tkt.uuid), ticket]);
            } else {


                setTicketOnScreen(prevArray => [...prevArray.map((tkt) => {
                    if (tkt.uuid == ticket.uuid) {
                        return ticket
                    }
                    return tkt
                })]);



                setTicketOnSpeaking(prevArray => [...prevArray.filter((tkt) => ticket.uuid != tkt.uuid)]);
            }
        })

        socketApi.disconnect((reason: any) => {
            console.log(reason)

            setRefresh(!refresh)
        })



        return () => {
            socketApi.unregisterHandler()
        }

    }, [device, refresh])


    if (((element.services && element?.services?.length > 0) || (element.servicesTemplate && element?.servicesTemplate?.length > 0)) && !element?.grid) {
        return <div className='row' style={css}>
            <audio id="audiox" src="" ref={audiox} autoPlay />
            <div className={`col ${!element?.inline ? '' : 'flex flex-row text-center'}`}>
                {
                    ticketOnScreen.filter((tkt) => {
                        if (!element?.deleteOldTickets) {
                            return true
                        } else {
                            return tkt.status == TicketStates.CALLING
                        }
                    }).slice(0, element?.callerRow || 3).map((tkt, index) => {

                        return <TicketCard limit={Number(element?.limitName || 16)} key={index} cssTicket={cssTicket} cssModule={cssModule} ticket={tkt} callByName={element.callByName || false} />
                    })
                }
            </div>
        </div>

    }


    const useStyles = createUseStyles({

        header: (gridCss: any) => ({
            color: gridCss.headerColor || 'white'
        }),
        table: (gridCss: any) => ({

            '& div': {
                borderRadius: 20,
                padding: 8,
                backgroundColor: gridCss.gridBackgroundColor,
                color: gridCss.gridColor,
            },

            '& .active': {
                borderRadius: 20,
                padding: 8,
                backgroundColor: gridCss.activeBackgroundColor,
                color: gridCss.fontColorActive
            }

        }),
    })

    const classes = useStyles(gridCss)

    if (((element.services && element?.services?.length > 0) || (element.servicesTemplate && element?.servicesTemplate?.length > 0)) && element?.grid! && !loading) {
        return <div className='row'>
            <div className='col'>
                <div id={element._id} style={css}>
                    <div className={`grid grid-cols-4 ${classes.header}`} >
                        <h1 className="font-bold">TICKET</h1>
                        <h1 className="font-bold">USER</h1>
                        <h1 className="font-bold">AGENT</h1>
                        <h1 className="font-bold">STATUS</h1>
                    </div>
                    <div className={classes.table}>
                        {
                            ticketOnScreen.slice(0, element?.callerRow || 3).map((tkt, index) => {

                                return <div key={index} className={`grid grid-cols-4 my-3 ${tkt.status == TicketStates.CALLING ? 'active' : ''} `}>
                                    <h1 className="font-bold">{tkt?.isAppointment ? tkt?.hour : tkt?.ticketLabel}</h1>
                                    <h1 className="font-bold">{tkt?.subscriber ? tkt?.subscriber?.name : ''}</h1>
                                    <h1 className="font-bold">{tkt?.agent?.alias}</h1>
                                    <h1 className="font-bold">{tkt?.status}</h1>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    }

    return <ExampleCaller element={element} />

}


const mapDispatchToProps = (dispatch: any) => {
    return {
        getDeviceTracking: (data: any) => dispatch(DevicesActions.getDeviceTracking(data)),
        tts: (data: any) => dispatch(DevicesActions.tts(data)),
        getAgentsByEntityUuid: (data: EntityTreeUuid) => dispatch(EntityActions.getAgents(data))
    }
}

const mapState = (state: RootState) => {

    const { devices, auth } = state;

    return {
        template: devices.template,
        device: devices.device,
        deviceTracking: devices.deviceTracking,
        user: auth.user
    }
}

export const CallerPreview = connect(mapState, mapDispatchToProps)(Index)
