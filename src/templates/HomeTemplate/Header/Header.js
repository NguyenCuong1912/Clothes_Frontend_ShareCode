import React, { Fragment } from 'react'
import TopSlick from '../../../components/Home/Slick/TopSlick';
import { _logo } from './../../../utils/util/ImagePath';
import { NavLink } from 'react-router-dom';
import { _home } from './../../../utils/util/ConfigPath';
import NavHeader from '../../../components/Home/Navbar/NavHeader';
import {
    AiOutlineHeart,
    AiOutlineSearch,
    AiOutlineShop,
    AiOutlineShopping,
    AiOutlineUser
} from "react-icons/ai";

export default function Header() {
    return (
        <Fragment>
            <TopSlick />
            <div className='grid grid-cols-12 px-14 h-20 -mt-2 content-center' style={{ backgroundColor: '#17242B' }}>
                <NavLink to={_home}>
                    <img className='bg-white' src={_logo} alt='Canifa' />
                </NavLink>
                <div className='col-span-7'>
                    <NavHeader />
                </div>
                <div className='col-span-4'>
                    <div className='grid grid-cols-5 h-full content-center'>
                        <div className='col-span-3 '>
                            <div className='w-4/5 ml-16 flex items-center text-gray-400 rounded-full' style={{ backgroundColor: '#333F48' }}>
                                <AiOutlineSearch className='text-2xl ml-2' />
                                <input className='text-lg font-medium py-1 px-2 w-full rounded-full' placeholder="Bạn tìm gì..." style={{ backgroundColor: '#333F48' }} />
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className='h-full flex items-center text-gray-400 text-2xl justify-end'>
                                <AiOutlineShop className='mx-2' />
                                <AiOutlineHeart className='mx-2' />
                                <AiOutlineUser className='mx-2' />
                                <AiOutlineShopping className='mx-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
