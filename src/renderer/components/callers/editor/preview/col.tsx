import { Col } from 'reactstrap';
import React from 'react';
import { ElementBuilder, TemplateBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { Element } from './element';
import { RootState } from '../../../../store';
import { connect } from 'react-redux';
import { applyConversionRatio } from '../../../../helpers/functions';

type Props = {
    element: ElementBuilder;
    template: TemplateBuilder;
}

export const Index: React.FC<Props> = (props) => {

    const { element, template } = props;
    const css = element?.css ? applyConversionRatio(element.css,(template.ratioWidth || 1), (template.ratioHeight || 1)) : {}

    return <Col md={element.md} id={element._id} style={css}>
        {element.children && element.children.map((elementChild, index) => {
            return <Element key={index} element={elementChild} />
        })}
    </Col>
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

export const ColPreview = connect(mapState, mapDispatchToProps)(Index)
