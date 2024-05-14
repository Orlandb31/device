import React from 'react';


type Props = {
    title: string
}

export const Title: React.FC<Props> = (props) => {

    const { title } = props;

    return <div className='title-container'>
        <h5 className='font-weight-bold pl-20'>
            {title}
        </h5>
    </div>


}