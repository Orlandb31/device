import React from 'react';
import { ElementBuilder, MediaType, TemplateBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { RootState } from '../../../../store';
import { connect } from 'react-redux';
import { applyConversionRatio } from '../../../../helpers/functions';


type Props = {
    element: ElementBuilder;
    template: TemplateBuilder;
}

export const Index: React.FC<Props> = (props) => {

    const { element, template } = props;

    const css = element?.css ? applyConversionRatio(element.css, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}

    if (element.mediaType == MediaType.image)
        return <img id={element._id} style={css} src={element.url} />

    if (element.mediaType == MediaType.video)
        return <video id={element._id} style={css} autoPlay={true} muted loop>
            <source src={element.url} type="video/mp4" />
        </video>

    return null
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

export const MediaPreview = connect(mapState, mapDispatchToProps)(Index)