import React, { useEffect, useState } from 'react';
import { ElementBuilder, ElementType, MediaItem, TextBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import axios from 'axios';


type Props = {
    element: ElementBuilder
}

export const Weather: React.FC<Props> = (props) => {

    const { element } = props;
    const css = element.css ? element.css : {}
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

    return <div id={element._id} style={css}>
        <div className={`section-container d-flex flex-column  align-items-center`}>
            <img src={weather?.current?.condition?.icon} width={50} />
            <span style={{ textAlign: 'center', fontWeight: 'bold', maxWidth: 410 }} >{weather?.current?.condition?.text}</span>
        </div>
    </div>




}