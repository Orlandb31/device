import React from 'react';
import { ElementBuilder, MediaType } from '@fluyappgo/commons/build/interfaces/builder';


type Props = {
    element: ElementBuilder
}

export const Media: React.FC<Props> = (props) => {

    const { element } = props;

    const css = element.css ? element.css : {}

    if (element.mediaType == MediaType.image)
        return <div id={element._id}>
            {
                <span className='edition-mode-title'>
                    {element.type}
                </span>
            }
            <img style={css} src={element.url} />
        </div>

    if (element.mediaType == MediaType.video)
        return <div id={element._id}>
            {
                <span className='edition-mode-title'>
                    {element.type}
                </span>
            }
            <video id={element._id} style={css} autoPlay={true} muted loop>
                <source src={element.url} type="video/mp4" />
            </video>
        </div>


    return null
}