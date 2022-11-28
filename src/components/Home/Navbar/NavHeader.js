import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { _home } from './../../../utils/util/ConfigPath';

export default function NavHeader() {
    return (
        <Fragment>
            <ul className='mt-4 flex'>
                <li>
                    <NavLink to={_home} className="px-6 text-lg text-gray-400 font-bold uppercase hover:text-white" >Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink to='' className="px-6 text-lg text-gray-400 font-bold uppercase hover:text-white" >Nữ</NavLink>
                </li>
                <li>
                    <NavLink to='' className="px-6 text-lg text-gray-400 font-bold uppercase hover:text-white" >Nam</NavLink>
                </li>
                <li>
                    <NavLink to='' className="px-6 text-lg text-gray-400 font-bold uppercase hover:text-white" >Bé gái</NavLink>
                </li>
                <li>
                    <NavLink to='' className="px-6 text-lg text-gray-400 font-bold uppercase hover:text-white" >Bé trai</NavLink>
                </li>
                <li>
                    <NavLink to='' className="px-6 text-lg text-gray-400 font-bold uppercase hover:text-white" >Outlet</NavLink>
                </li>
                <li>
                    <NavLink to='' className="px-6 text-lg text-gray-400 font-bold uppercase hover:text-white" >Canifa z</NavLink>
                </li>
            </ul>
        </Fragment>
    )
}
