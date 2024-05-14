import React, { useEffect, useRef, useState } from 'react';
import { ElementBuilder, ElementType, MediaItem, MediaType, TemplateBuilder } from '@fluyappgo/commons/build/interfaces/builder';
import { connect } from 'react-redux';
import { RootState } from '../../../../store';
import { applyConversionRatio } from '../../../../helpers/functions';
import axios from 'axios';

type Props = {
    element?: ElementBuilder;
    template: TemplateBuilder;
}

export const Index: React.FC<Props> = (props) => {

    const { element, template } = props;
    const [len, setLen] = useState(0);
    const [current, setCurrent] = useState(0);
    const [tick, setTick] = useState(0);
    const videoRef = useRef<any>();
    const [muted, setMuted] = useState(false);
    const [urls, setUrls] = useState<any>({});

    const saveUrls = async (objects: MediaItem[]) => {

        if (objects.length == 0)
            return


        let localUrl: any = {

        }

        const configx: any = { responseType: 'blob' };

        await Promise.all(objects.map(async (obj) => {


            const mediaObjectResponse = await axios.get(obj.url || '', configx);

            let srcx = window.URL.createObjectURL(mediaObjectResponse.data)
            localUrl[obj._id || ''] = srcx;

            return obj;
        }))

        setUrls(localUrl)


    }


    console.log(urls)

    useEffect(() => {

        if (element?.objects && element?.objects.length) {
            setLen(element?.objects.length || 0)
            saveUrls(element?.objects || [])
        }

    }, [element?.objects])

    useEffect(() => {

        setTimeout(() => {
            var video: any = document.getElementById("videoPlayer");
            if (!element?.muted)
                video.muted = element?.muted;
        }, 15000);

    }, [current, element])

    console.log("current", current)
    console.log("len", len)

    const css = element?.css ? applyConversionRatio(element.css, (template.ratioWidth || 1), (template.ratioHeight || 1)) : {}


    if (len < 1) {
        return null
    }

    if (element?.objects![current]?.type == ElementType.media && element?.objects![current]?.mediaType == MediaType.image) {
        return <div>
            <img src={urls[element?.objects![current]._id || '']} style={css} onLoad={() => {

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
            <video id={'videoPlayer'} ref={videoRef} src={urls[element?.objects![current]._id || '']} muted
                style={css} autoPlay={true} loop={len == 1}
                onEnded={() => {
                    if (current >= (len - 1)) {
                        setCurrent(0)
                    } else {
                        setCurrent(current + 1)
                    }
                }}
            />
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