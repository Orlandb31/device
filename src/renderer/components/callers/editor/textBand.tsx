import React from 'react';
import { TextBuilder } from '@fluyappgo/commons/build/interfaces/builder';


type Props = {
    element: TextBuilder
}

export const TextBand: React.FC<Props> = (props) => {

    const { element } = props;

    const css = element.css ? element.css : {}

    return <p id={element._id} style={css} className='target' >
        {element.text}
    </p>


}