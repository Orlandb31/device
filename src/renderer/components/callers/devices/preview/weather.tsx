import { Row } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { ElementBuilder, ElementType, MediaItem, TemplateBuilder, TextBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import axios from 'axios';
import { RootState } from '../../../../store';
import { connect } from 'react-redux';
import { applyConversionRatio } from '../../../../helpers/functions';


type Props = {
    element: ElementBuilder;
    template: TemplateBuilder;
}

export const Index: React.FC<Props> = (props) => {

    const { element, template } = props;
    const css = element?.css ? applyConversionRatio(element.css, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}
    const [weather, setWeather] = useState<any>({});

    useEffect(() => {

        getWeatherData(element.country || 'panama')

    }, [element.country])

    const getWeatherData = async (data: string) => {
        try {
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=55841a57baef469f947212246221407&q=${data}&aqi=no&lang=es`);
            setWeather(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return <div style={css}>
        <div className={`section-container d-flex flex-column  align-items-center`}>
            <img src={weather?.current?.condition?.icon} width={50} />
            <span style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: 410, fontSize: '0.75em' }} >{weather?.current?.condition?.text}</span>
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

export const WeatherPreview = connect(mapState, mapDispatchToProps)(Index)