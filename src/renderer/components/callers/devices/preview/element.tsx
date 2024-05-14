

import React from 'react';
import { ElementBuilder, ElementType } from '@fluyappgo/commons/build/interfaces/builder';
import { RowPreview } from './row';
import { MediaPreview } from './media';
import { TextPreview } from './text';
import { WeatherPreview } from './weather';
import { ClockPreview } from './clock';
import { TextBandPreview } from './textBand';
import { SliderPreview } from './slider';
import { CallerPreview } from './caller';
import { ColPreview } from './col';




type Props = {
    element: ElementBuilder
}

export const Element: React.FC<Props> = (props) => {

    const { element } = props;


    if (element.type == ElementType.row) {
        return <RowPreview element={element} />
    }

    if (element.type == ElementType.col) { 
        return <ColPreview element={element} />
    }

    if (element.type == ElementType.media) {
        return <MediaPreview element={element} />
    }

    if (element.type == ElementType.text) {
        return <TextPreview element={element} />
    }

    if (element.type == ElementType.weather) {
        return <WeatherPreview element={element} />
    }

    if (element.type == ElementType.clock) {
        return <ClockPreview element={element} />
    }

    if (element.type == ElementType.textBand) {
        return <TextBandPreview element={element} />
    }

    if (element.type == ElementType.slider) {
        return <SliderPreview element={element} />
    }

    if (element.type == ElementType.caller) {
        return <CallerPreview element={element} />
    }

    

    return null

}