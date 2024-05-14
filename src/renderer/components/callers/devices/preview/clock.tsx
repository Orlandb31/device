import { Row } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { ElementBuilder, TemplateBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import moment from "moment-timezone";
import { connect } from 'react-redux';
import { RootState } from '../../../../store';
import { applyConversionRatio } from '../../../../helpers/functions';


type Props = {
    element: ElementBuilder;
    template: TemplateBuilder;
}

export const Index: React.FC<Props> = (props) => {

    const { element, template } = props;
    const css = element?.css ? applyConversionRatio(element.css, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}
    const [time, setTime] = useState("");

    useEffect(() => {


        const tick = setInterval(() => {
            setTime(moment().tz(element.timezone || "America/Bogota").format(element.format || "LTS"))
        }, 1000)

        return () => {
            clearInterval(tick);
        }

    }, [element.timezone])



    return <div style={css}>
        <div className={`section-container d-flex flex-column  align-items-center`}>
            <span style={{ textAlign: 'center', fontWeight: 'bold' }} >{time}</span>
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

export const ClockPreview = connect(mapState, mapDispatchToProps)(Index)