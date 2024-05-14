import React, { useEffect, useState } from 'react';
import { AlignmentType, ElementBuilder, TemplateBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { Element } from './element';
import { applyConversionRatio } from '../../../../helpers/functions';
import { RootState } from '../../../../store';
import { connect } from 'react-redux';

type Props = {
    element: ElementBuilder;
    template: TemplateBuilder;
}

export const Index: React.FC<Props> = (props) => {

    const { element, template } = props;
    const css = element?.css ? applyConversionRatio(element.css, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}


    return <div style={css} className={`row ${element?.noGutters ? 'g-0' : ''} ${element?.fullw ? 'w-100' : ''}  ${element?.fullh ? 'h-100' : ''} ${element?.alignment ? `align-items-${element?.alignment}` : ''} `} id={element._id} >
        {element?.children && element?.children.map((elementChild, index) => {
            return <Element key={index} element={elementChild} />
        })}
    </div>


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

export const RowPreview = connect(mapState, mapDispatchToProps)(Index)
