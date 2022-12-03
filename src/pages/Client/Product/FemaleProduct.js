import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GetAllProductAction } from '../../../redux/Actions/ManageProductAction';
import { _female, _home } from '../../../utils/util/ConfigPath';
import { AiFillHome } from 'react-icons/ai';
import { _banner_nu } from '../../../utils/util/ImagePath';
import OneProduct from '../../../components/Home/Product/OneProduct';
import OneSlick from '../../../components/Home/Slick/OneSlick';
import ProductSlick from '../../../components/Home/Slick/ProductSlick';

export default function FemaleProduct() {
    const dispatch = useDispatch();

    const { lstProduct } = useSelector(state => state.ManageProductReducer);

    const lstFemale = lstProduct.filter(lstProduct => lstProduct.TypeGender === false);
    console.log('a', lstFemale)


    useEffect(() => {
        dispatch(GetAllProductAction())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='mx-16'>
            <div className='w-full flex text-lg font-medium my-4'>
                <NavLink to={_home} className='flex items-center border-r p-2 text-black hover:underline hover:text-red-600'><AiFillHome className='mx-1' />Trang chủ</NavLink>
                <NavLink to={_female} className='p-2 text-black hover:underline hover:text-red-600'>Nữ</NavLink>
            </div>
            <div className='mt-4'>
                <img className='w-full' src={_banner_nu} alt='nữ' />
                <div className='grid grid-cols-4 my-8'>
                    <div>
                        <OneSlick product={lstFemale} />
                    </div>
                    <div className='col-span-3 mx-4'>
                        <ProductSlick lstProduct={lstFemale} />
                    </div>
                </div>
                <div className='grid grid-cols-4 my-8'>
                    {lstFemale.slice(0, 8).map((item, index) => {
                        return <OneProduct key={index} clothes={item} />
                    })}
                </div>
            </div>
        </div>
    )
}
