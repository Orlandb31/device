import React, { useEffect, useState } from 'react';
import { AlignmentType, ElementBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { Element } from './element';

type Props = {
    element: ElementBuilder
}

export const RowBuilder: React.FC<Props> = (props) => {

    const { element } = props;
    const css = element?.css ? element.css : {}


    return <div style={css} className={`row ${element?.noGutters ? 'g-0' : ''} ${element?.fullw ? 'w-100' : ''}  ${element?.fullh ? 'h-100' : ''} ${element?.alignment ? `align-items-${element?.alignment}` : ''} `} id={element._id} >
        {
            <span className='edition-mode-title'>
                {element.type}
            </span>
        }
        {element?.children && element?.children.map((elementChild, index) => {
            return <Element key={index} element={elementChild} />
        })}
    </div>


}