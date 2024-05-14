import React, { useEffect, useState } from 'react';
import { ElementBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import moment from "moment-timezone";


type Props = {
    element: ElementBuilder
}

export const Clock: React.FC<Props> = (props) => {

    const { element } = props;
    const css = element.css ? element.css : {}
    const [time, setTime] = useState("");

    useEffect(() => {

        console.log(element)

        const tick = setInterval(() => {
            setTime(moment().tz(element.timezone || "America/Bogota").format(element.format || "LTS"))
        }, 1000)

        return () => {
            clearInterval(tick);
        }

    }, [element.timezone])



    return <div id={element._id} style={css}>
        {
            <span className='edition-mode-title'>
                {element.type}
            </span>
        }
        <div className={`section-container d-flex flex-column  align-items-center`}>
            <span style={{ textAlign: 'center', fontWeight: 'bold' }} >{time}</span>
        </div>
    </div>




}