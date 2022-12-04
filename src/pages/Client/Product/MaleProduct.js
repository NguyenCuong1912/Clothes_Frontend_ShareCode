import React, { useEffect } from 'react'
import { _banner_nam } from '../../../utils/util/ImagePath'
import { AiFillHome } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { _home, _male } from './../../../utils/util/ConfigPath';
import ProductSlick from '../../../components/Home/Slick/ProductSlick';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductAction } from '../../../redux/Actions/ManageProductAction';
import OneSlick from '../../../components/Home/Slick/OneSlick';
import OneProduct from '../../../components/Home/Product/OneProduct';
export default function MaleProduct(props) {
    const dispatch = useDispatch();

    const { lstProduct } = useSelector(state => state.ManageProductReducer);

    const lstMale = lstProduct.filter(lstProduct => lstProduct.TypeGender === true);

    useEffect(() => {
        dispatch(GetAllProductAction())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='mx-16'>
            <div className='w-full flex text-lg font-medium my-4'>
                <NavLink to={_home} className='flex items-center border-r p-2 text-black hover:underline hover:text-red-600'><AiFillHome className='mx-1' />Trang chủ</NavLink>
                <NavLink to={_male} className='p-2 text-black hover:underline hover:text-red-600'>Nam</NavLink>
            </div>
            <div className='mt-4'>
                <img className='w-full' src={_banner_nam} alt='nam' />
                <div className='grid grid-cols-4 my-8'>
                    <div>
                        <OneSlick product={lstMale} />
                    </div>
                    <div className='col-span-3 mx-4'>
                        <ProductSlick lstProduct={lstMale} />
                    </div>
                </div>
                <div className='grid grid-cols-4 my-8'>
                    {lstMale.slice(0, 8).map((item, index) => {
                        return <OneProduct key={index} clothes={item} />
                    })}
                </div>
            </div>
        </div>
    )
}
