import React, { useEffect, useState } from 'react';
import { Background, ElementBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { Element } from './element';

type Props = {
    background?: ElementBuilder;
    resolution: number;
}

export const BackgroundBuilder: React.FC<Props> = (props) => {

    const { background, resolution } = props;
    const [height, setHeight] = useState(675)
    const [width, setWidth] = useState(1200)

    useEffect(() => {

        if (resolution == 1 || resolution == 3) {
            setHeight(675)
            setWidth(1200)
        } else if (resolution == 2 || resolution == 4) {
            setHeight(1200)
            setWidth(675)
        }


    }, [resolution])

    const css = background?.css ? { ...background.css, height: height, width: width } : { height: height, width: width };
    const backgrondUrl = (background?.url?.length || 0) > 0 && background?.url ? { background: `url(${background?.url})`, ...css } : { ...css }


    return <div className='bg-cover' id="background-canvas" style={backgrondUrl as any} >
        {background?.children && background?.children.map((elementChildren, index) => {
            return <Element key={index} element={elementChildren} />
        })}
    </div>


}