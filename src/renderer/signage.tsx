import { Branch, Department, Entity, EntityTreeUuid, List, RtMessageDTO, Service, Ticket } from '@fluyappgo/commons';
import { DeviceBuilder, ElementBuilder, TemplateBuilder } from '@fluyappgo/commons/build/interfaces/builder'
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { Row, Col } from 'reactstrap';
import { DevicesActions } from './store/devices/action';
import { RootState } from './store';
import { connect } from 'react-redux'
import { BackgroundPreview } from './components/callers/devices/preview/background';
import { SocketApi } from './helpers';

type Props = {
    isSidebarShow: boolean;
    tickets: List<Ticket[]>;
    entity: Entity;
    branch: Branch;
    department: Department;
    service: Service;
    pagination: number;
    begin: string;
    end: string;
    nextKey: number;
    template: TemplateBuilder;
    element: ElementBuilder;
    device: DeviceBuilder;
    editDevice: Function;
    setTemplate: Function;
    getTemplates: Function;
    getDevice: Function;
}


const Index: React.FC<Props> = (props) => {

    const { entity, branch, department, service, template, element, editDevice, setTemplate, getTemplates, device, getDevice } = props;
    const [ratioWidth, setRatioWidth] = useState(0);
    const [ratioHeight, setRatioHeight] = useState(0);
    const [loading, setLoading] = useState(false)
    const [resolution, setResolution] = useState(1);
    const [refresh, setRefresh] = useState(true)
    const [isOnline, setIsOnline] = useState(false)
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
  
    useEffect(() => {
      listen();
      return () => {
      };
    }, []);

    useEffect(() => {


        if(!ready)
            return ;

        let socketApi = SocketApi('https://fluyapp.com/socket/events/')


        const data: RtMessageDTO = {
            uuid: `${device?._id}-DEVICE-UPDATE`,
            user: {}
        }

        socketApi.join(data, () => { })
        socketApi.done(async (data: any) => {
            getDevice(config?.deviceUuid);
        })

        socketApi.disconnect((reason: any) => {
            console.log(reason)

            setRefresh(!refresh)
        })

        return () => {
            socketApi.unregisterHandler()
        }

    }, [refresh, device, ready])

    useEffect(() => {

        if(!ready){
            return
        }

        getDevice(config?.deviceUuid);

        setTimeout(() => {

            const width = Number($("#background-canvas").outerWidth()) || 0;
            const height = Number($("#background-canvas").outerHeight()) || 0;

            console.log(width, height)
            let globalWidth = 1920;
            let globalHeight = 1080;

            if (resolution == 1) {
                globalWidth = 1920;
                globalHeight = 1080;
            } else if (resolution == 2) {
                globalWidth = 1080;
                globalHeight = 1920;
            } else if (resolution == 3) {
                globalWidth = 1366;
                globalHeight = 768;
            } else if (resolution == 4) {
                globalWidth = 768;
                globalHeight = 1366;
            }

            console.log("Resolucion en signage "+ width, height)

            if (width > 0)
                setRatioWidth(globalWidth / width)
            if (height > 0)
                setRatioHeight(globalHeight / height)

        }, 500);


        (window as any).ipcRenderer.onResponseFluyapp((json: any) => {
            console.log("AQUIIII: ", json, event)
            setIsOnline(json?.isOnline)
        })

    }, [ready])

    const entityTree: EntityTreeUuid = {
        entityUuid: device?.entityUuid || '',
        branchUuid: device?.branchUuid || '',
        departmentUuid: device?.departmentUuid || '',
        serviceUuid: device?.serviceUuid || '',
    }

    if (!device) {
        return <div>
            <h1>
                NO DEVICE
            </h1>
        </div>
    }



    return <>
        <style>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div {
        height: 100vh;
      }
    `}
        </style>
        <div className='w-100 h-100' style={{ overflow: 'hidden !important' }} >
            <Row className='h-100 g-0'  >
                <Col md={12}>
                    <div style={isOnline ? {
                        position: 'absolute', top: 30,
                        right: 30, width: 20, height: 20, background: 'green',
                        borderRadius: '100%'
                    } : {
                        position: 'absolute', top: 30,
                        right: 30, width: 20, height: 20, background: 'red',
                        borderRadius: '100%'
                    }}>
                    </div>
                    <div className='w-100 h-100 preview'>
                        <div className='w-100 h-100 preview-container'>
                            {template?.children && template?.children?.length > 0 ? <BackgroundPreview background={template?.children![0] || {}} /> : <BackgroundPreview background={{}} />}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </>
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setTemplate: (data: TemplateBuilder) => dispatch(DevicesActions.setTemplate(data)),
        getTemplates: () => dispatch(DevicesActions.getTemplates()),
        editDevice: (data: DeviceBuilder) => dispatch(DevicesActions.editDevice(data)),
        getDevice: (data: string) => dispatch(DevicesActions.getDevice(data)),
    }
}

const mapState = (state: RootState) => {

    const { general, entity, planning, devices } = state;

    return {
        isSidebarShow: general.isSidebarShow,
        users: entity.users,
        entity: entity.entity,
        branch: entity.branch,
        department: entity.department,
        service: entity.service,
        tickets: planning.tickets,
        pagination: general.pagination,
        begin: general.begin,
        end: general.end,
        nextKey: general.nextKey,
        template: devices.template,
        element: devices.element,
        device: devices.device
    }
}

export const Signage = connect(mapState, mapDispatchToProps)(Index)
