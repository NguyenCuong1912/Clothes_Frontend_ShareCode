import React, { Fragment, useEffect } from 'react'
import { Route } from 'react-router';
import Header from '../HomeTemplate/Header/Header';
import { NavLink } from 'react-router-dom';
import { _account, _edit } from '../../utils/util/ConfigPath';
import Footer from '../HomeTemplate/Footer/Footer';
import { BsPersonCircle, BsPersonLinesFill } from "react-icons/bs";

export default function AccountTemplate(props) {
    const { Component, ...restRoute } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <Route {...restRoute} render={(propsRoute) => {

        return <Fragment>
            <Header />
            <div className='grid grid-cols-5 my-10'>
                <div className='col-start-2 col-span-3'>
                    <div className='grid grid-cols-4'>
                        <div>
                            <div className='uppercase text-2xl'>Tài khoản</div>
                            <div className='border p-4 m-4 shadow-lg drop-shadow-lg'>
                                <div className=''>
                                    <NavLink to={_account} className='flex text-black text-base mt-4 mb-2 hover:text-red-500 hover:underline'><BsPersonCircle className='text-2xl mr-4' />Thông tin tài khoản</NavLink>
                                </div>
                                <div className='mt-4'>
                                    <NavLink to={`${_account}${_edit}`} className='flex text-black text-base my-2 hover:text-red-500 hover:underline '><BsPersonLinesFill className='text-2xl mr-4' />Cập nhật tài khoản</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-3'>
                            <Component {...propsRoute} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    }} />
}
