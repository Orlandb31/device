import React, { useEffect, useState } from 'react';
import { ElementBuilder, ElementType, MediaType, TemplateBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { connect } from 'react-redux';
import { RootState } from '../../../../store';
import { applyConversionRatio } from '../../../../helpers/functions';

type Props = {
    element?: ElementBuilder;
    template: TemplateBuilder;
}

export const Index: React.FC<Props> = (props) => {

    const { element, template } = props;
    const [len, setLen] = useState(0);
    const [current, setCurrent] = useState(0);
    const [tick, setTick] = useState(0);



    useEffect(() => {

        if (element?.objects && element?.objects.length) {
            setLen(element?.objects.length || 0)
        }



    }, [element?.objects])


    const css = element?.css ? applyConversionRatio(element.css, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}


    if (len < 1) {
        return null
    }

    if (element?.objects![current]?.type == ElementType.media && element?.objects![current]?.mediaType == MediaType.image) {
        return <div>
            <img src={element?.objects![current].url} style={css} onLoad={() => {

                setTimeout(() => {
                    if (current >= (len - 1)) {
                        setCurrent(0)
                    } else {
                        setCurrent(current + 1)
                    }

                }, 10000)

            }} />
        </div>
    }

    if (element?.objects![current]?.type == ElementType.media && element?.objects![current]?.mediaType == MediaType.video) {
        return <div >
            <video src={element?.objects![current].url} autoPlay={true} muted={element?.muted || false} style={css} loop onEnded={() => {

               /*  alert('holaaaa')
                console.log('aaaa') */

                if (current >= (len - 1)) {
                    setCurrent(0);
                } else {
                    setCurrent(current + 1)
                }
            }} />
        </div>
    }


    return <div>
        probando
    </div >


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

export const SliderPreview = connect(mapState, mapDispatchToProps)(Index)