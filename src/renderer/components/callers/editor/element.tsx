


import React from 'react';
import { ElementBuilder, ElementType } from '@fluyappgo/commons/build/interfaces/builder';
import { RowBuilder } from './row';
import { ColBuilder } from './col';
import { Text } from './text';
import { Media } from './media';
import { Weather } from './weather';
import { Clock } from './clock';
import { TextBand } from './textBand';
import { SliderBuilder } from './slider';
import { CallerBuilder } from './caller';


type Props = {
    element: ElementBuilder
}

export const Element: React.FC<Props> = (props) => {

    const { element } = props;

    if (element.type == ElementType.row) {
        return <RowBuilder element={element} />
    }

    if (element.type == ElementType.col) { 
        return <ColBuilder element={element} />
    }

    if (element.type == ElementType.media) {
        return <Media element={element} />
    }

    if (element.type == ElementType.text) {
        return <Text element={element} />
    }

    if (element.type == ElementType.weather) {
        return <Weather element={element} />
    }

    if (element.type == ElementType.clock) {
        return <Clock element={element} />
    }

    if (element.type == ElementType.textBand) {
        return <TextBand element={element} />
    }

    if (element.type == ElementType.slider) {
        return <SliderBuilder element={element} />
    }

    if (element.type == ElementType.caller) {
        return <CallerBuilder element={element} />
    }

    

    return null

}