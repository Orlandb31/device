import React from 'react';
import { ElementBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { Element } from './element';
import { Col } from 'reactstrap';

type Props = {
    element: ElementBuilder
}

export const ColBuilder: React.FC<Props> = (props) => {

    const { element } = props;
    const css = element?.css ? element.css : {}

    return <Col md={element.md} id={element._id} style={css}>
        {
            <span className='edition-mode-title'>
                {element.type}
            </span>
        }
        {element.children && element.children.map((elementChild, index) => {
            return <Element key={index} element={elementChild} />
        })}
    </Col>


}