import React from 'react';
import { ElementBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { Element } from './element';

type Props = {
    background?: ElementBuilder
}

export const BackgroundPreview: React.FC<Props> = (props) => {

    const { background } = props;

    const css = background?.css ? background.css : {};
    const backgrondUrl = (background?.url?.length || 0) > 0 && background?.url ? { background: `url(${background?.url})`, ...css } : { ...css }


    return <div className='h-100 bg-cover-full' style={backgrondUrl} >
        {background?.children && background?.children.map((elementChildren, index) => {
            return <Element key={index} element={elementChildren} />
        })}
    </div> 
 

}