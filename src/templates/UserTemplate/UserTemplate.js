import React from 'react'
import { Route } from 'react-router';
import { _background } from '../../utils/util/ImagePath';

export default function UserTemplate(props) {
    const { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {

        return <div className='h-screen' style={{ backgroundImage: `url(${_background})` }}>

            <Component {...propsRoute} />
        </div>
    }} />
}
