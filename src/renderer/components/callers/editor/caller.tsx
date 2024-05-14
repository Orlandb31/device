import React, { useEffect, useState } from 'react';
import { ElementBuilder, TextBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { createUseStyles } from 'react-jss'


type Props = {
    element: ElementBuilder
}

export const CallerBuilder: React.FC<Props> = (props) => {

    const { element } = props;

    const css = element.css ? element.css : {}
    const cssModule = element.moduleCss ? element.moduleCss : {}
    const cssTicket = element.ticketCss ? element.ticketCss : {}
    const gridCss = element.gridCss ? element.gridCss : {}

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])

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



    if (element.grid && !loading) {
        return <div id={element._id} style={css}>
            <div className={`grid grid-cols-4 ${classes.header}`} >
                <h1 className="font-bold">TICKET</h1>
                <h1 className="font-bold">USER</h1>
                <h1 className="font-bold">AGENT</h1>
                <h1 className="font-bold">STATUS</h1>
            </div>
            <div className={classes.table}>
                <div className='grid grid-cols-4 my-3 active'>
                    <h1 className="font-bold">A054</h1>
                    <h1 className="font-bold">JUANXOG</h1>
                    <h1 className="font-bold">AGENT1</h1>
                    <h1 className="font-bold">CREATED</h1>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <h1 className="font-bold">A054</h1>
                    <h1 className="font-bold">JUANXOG</h1>
                    <h1 className="font-bold">AGENT1</h1>
                    <h1 className="font-bold">CREATED</h1>
                </div>
                <div className='grid grid-cols-4 my-3'>
                    <h1 className="font-bold">A054</h1>
                    <h1 className="font-bold">JUANXOG</h1>
                    <h1 className="font-bold">AGENT1</h1>
                    <h1 className="font-bold">CREATED</h1>
                </div>
            </div>
        </div>
    }

    return <div className='row' id={element._id} style={css}>
        <div className={`col ${!element?.inline ? '' : 'flex flex-row'}`}> 
            {
                <span className='edition-mode-title'>
                    {element.type}
                </span>
            }
            <div className='w-100 blink_me'>
                <div style={cssTicket} >
                    ASD123x
                </div>
                <div className='card-caller-module' style={cssModule}>
                    MODULO 3
                </div>
            </div>
            <div className='w-100 '>
                <div style={cssTicket} >
                    ASD123
                </div>
                <div className='card-caller-module' style={cssModule}>
                    MODULO 3
                </div>
            </div>
            <div className='w-100'>
                <div style={cssTicket} >
                    ASD123
                </div>
                <div className='card-caller-module' style={cssModule}>
                    MODULO 3
                </div>
            </div>
        </div>

    </div>

}