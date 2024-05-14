import React, { useEffect, useState } from 'react';
import { ElementBuilder, ElementType, MediaType } from '@fluyappgo/commons/build/interfaces/builder';
import { Element } from './element';

type Props = {
    element?: ElementBuilder
}

export const SliderBuilder: React.FC<Props> = (props) => {

    const { element } = props;
    const [len, setLen] = useState(0);
    const [current, setCurrent] = useState(0);



    useEffect(() => {

        if (element?.objects && element?.objects.length) {
            setLen(element?.objects.length || 0)
        }

    }, [element?.objects])


    const css = element?.css ? element.css : {}



    if (len < 1) {
        return null
    }



    if (element?.objects![current]?.type == ElementType.media && element?.objects![current]?.mediaType == MediaType.image) {
        return <div id={element._id} >
            {
                <span className='edition-mode-title'>
                    {element.type}
                </span>
            }
            <img src={element?.objects![current].url} style={css} />
        </div>

    }

    if (element?.objects![current]?.type == ElementType.media && element?.objects![current]?.mediaType == MediaType.video) {
        return <div id={element._id} >
            {
                <span className='edition-mode-title'>
                    {element.type}
                </span>
            }
            <video src={element?.objects![current].url} autoPlay={true} muted={element?.muted || false} style={css} loop onEnded={() => {
                if (current >= (len - 1)) {
                    setCurrent(0);
                } else {
                    setCurrent(current + 1)
                }

            }} />
        </div>
    }


    return <div>
        probando
    </div >


}