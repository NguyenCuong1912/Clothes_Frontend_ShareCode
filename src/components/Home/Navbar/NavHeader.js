import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { _female, _home, _male } from './../../../utils/util/ConfigPath';

export default function NavHeader() {
    return (
        <Fragment>
            <ul className='mt-4 flex'>
                <li>
                    <NavLink to={_home} className="px-6 text-lg text-gray-400 font-bold uppercase hover:text-white" >Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink to={_female} className="px-6 text-lg text-gray-400 font-bold uppercase hover:text-white" >Nữ</NavLink>
                </li>
                <li>
                    <NavLink to={_male} className="px-6 text-lg text-gray-400 font-bold uppercase hover:text-white" >Nam</NavLink>
                </li>
            </ul>
        </Fragment>
    )
}
