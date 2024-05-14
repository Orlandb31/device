import React, { useEffect, useState } from 'react';
import { ElementBuilder, TemplateBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { RootState } from '../../../../store';
import { connect } from 'react-redux';
import { applyConversionRatio } from '../../../../helpers/functions';
import { createUseStyles } from 'react-jss'


type Props = {
    element: ElementBuilder;
    template: TemplateBuilder
}

export const Index: React.FC<Props> = (props) => {

    const { element, template } = props;

    const css = element?.css ? applyConversionRatio(element.css, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}
    const cssModule = element.moduleCss ? applyConversionRatio(element.moduleCss, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}
    const cssTicket = element.ticketCss ? applyConversionRatio(element.ticketCss, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}
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
            </div>
        </div>
    }

    return <div className='row' style={css}>
        <div className={`${!element?.inline ? '' : 'flex flex-row'}`}>
            <div className='w-100 blink_me'>
                <div style={cssTicket} > 
                    A13
                </div>
                <div className='card-caller-module' style={cssModule}>
                    MODULO 6
                </div>
            </div>
            <div className='w-100'>
                <div style={cssTicket} >
                    A14
                </div>
                <div className='card-caller-module' style={cssModule}>
                    MODULO 8
                </div>
            </div>
            <div className='w-100'>
                <div style={cssTicket} >
                    A16
                </div>
                <div className='card-caller-module' style={cssModule}>
                    MODULO 1
                </div>
            </div>
        </div>
    </div>


}


const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

const mapState = (state: RootState) => {

    const { devices } = state;

    return {
        template: devices.template,
    }
}

export const CallerPreview = connect(mapState, mapDispatchToProps)(Index)
