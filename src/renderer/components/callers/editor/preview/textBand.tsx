import React from 'react';
import { TemplateBuilder, TextBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { connect } from 'react-redux';
import { RootState } from '../../../../store';
import { applyConversionRatio } from '../../../../helpers/functions';


type Props = {
    element: TextBuilder;
    template: TemplateBuilder;
}

export const Index: React.FC<Props> = (props) => {

    const { element, template } = props;


    const css = element?.css ? applyConversionRatio(element.css, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}

    return <p id={element._id} style={css} className='target' >
        {element.text}
    </p>


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

export const TextBandPreview = connect(mapState, mapDispatchToProps)(Index)