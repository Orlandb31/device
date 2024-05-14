import React from 'react';
import { ElementBuilder, ElementType, MediaItem, TextBuilder } from '@fluyappgo/commons/build/interfaces/builder';


type Props = {
    element: TextBuilder
}

export const Text: React.FC<Props> = (props) => {

    const { element } = props;

    const css = element.css ? element.css : {}

    return <p id={element._id} style={css} >
        {
            <span className='edition-mode-title'>
                {element.type}
            </span>
        }
        {element.text}
    </p>


}