import React from 'react';
import { ElementBuilder, TemplateBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { RootState } from '../../../../store';
import { connect } from 'react-redux';
import { applyConversionRatio } from '../../../../helpers/functions';


type Props = {
    element: ElementBuilder;
    template: TemplateBuilder
}

export const Index: React.FC<Props> = (props) => {

    const { element, template } = props;

    const css = element?.css ? applyConversionRatio(element.css, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}
    const cssModule = element.moduleCss ? applyConversionRatio(element.moduleCss, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}
    const cssTicket = element.ticketCss ? applyConversionRatio(element.ticketCss, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}

    return <div className='row' style={css}>
        <div className='col'>
            <div className={`${!element?.inline ? '' : 'flex flex-row'}`}>
                <div className='blink_me w-100'>
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

export const ExampleCaller = connect(mapState, mapDispatchToProps)(Index)
