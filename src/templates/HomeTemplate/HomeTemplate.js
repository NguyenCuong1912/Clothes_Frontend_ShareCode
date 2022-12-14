import React from 'react'
import { Route } from 'react-router';
import { useEffect, Fragment } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';


export default function HomeTemplate(props) {
    const { Component, ...restRoute } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <Route {...restRoute} render={(propsRoute) => {

        return <Fragment>
            <Header />
            <Component {...propsRoute} />
            <Footer />

        </Fragment>
    }} />
}
