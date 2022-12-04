import React, { useEffect } from 'react'
import {
    _background,
    _banner,
    _banner2,
    _banner3,
    _canifaz,
} from '../../../utils/util/ImagePath'
import {
    FaTelegramPlane,
} from "react-icons/fa";
import HomeProduct from '../../../components/Home/Product/HomeProduct';
import { useSelector, useDispatch } from 'react-redux';
import { ManageProductReducer } from './../../../redux/Reducers/ManageProductReducer';
import { GetAllProductAction } from '../../../redux/Actions/ManageProductAction';

export default function Home() {
    const dispatch = useDispatch();
    const { lstProduct } = useSelector(state => state.ManageProductReducer);
    useEffect(() => {
        dispatch(GetAllProductAction())
    }, [])
    return (
        <div style={{ backgroundImage: `url(${_background})` }}>
            <div className='bg-cyan-400 text-white py-2 text-base font-medium text-center'>
                <marquee scrollamount="5" className='w-2/5'>
                    <span className='uppercase'>Đổi hàng miễn phí</span> - Tại tất cả các cửa hàng trong 30 ngày.
                    Miễn phí vận chuyển toàn bộ đơn hàng
                </marquee>
            </div>
            <div>
                <img src={_banner} alt='banner' />
            </div>
            <div className='flex m-16'>
                <div className='w-1/2 mr-2'>
                    <img className='h-96' src={_banner2} alt='banner2' />
                </div>
                <div className='w-1/2 ml-2'>
                    <img className='h-96' src={_banner3} alt='banner3' />
                </div>
            </div>
            <div className='mx-16 grid grid-cols-2 flex-wrap'>
                {lstProduct.slice(0, 4).map((item, index) => {
                    return <HomeProduct key={index} clothes={item} />
                })}
            </div>

            <div className='mx-16 mt-4'>
                <img className='w-full' src={_canifaz} alt='Canifa Z' />
            </div>
            <div className='flex h-32 mx-16 mt-1 pb-8'>
                <div className='w-1/2 px-12 mr-1 flex items-center justify-between rounded-bl-lg' style={{ backgroundColor: '#333F48' }}>
                    <div className='text-white text-3xl font-medium'>Đăng ký nhận bản tin</div>
                    <div className='text-base flex items-center rounded w-1/2' style={{ backgroundColor: '#53616B' }}>
                        <input className='p-4 w-full rounded' style={{ backgroundColor: '#53616B' }} placeholder='Nhập email của bạn...' />
                        <FaTelegramPlane className='text-2xl text-gray-400 mr-4' />
                    </div>
                </div>
                <div className='w-1/2 flex items-center justify-around rounded-br-lg' style={{ backgroundColor: '#333F48' }}>
                    <div className='text-white text-3xl font-medium'>Kết nối ngay</div>
                    <div className='flex'>
                        <img className='w-14 h-14 rounded mx-2 cursor-pointer' title='Facebook' src='../img/facebook.png' alt='Facebook' />
                        <img className='w-14 h-14 rounded mx-2 cursor-pointer' title='Instagram' src='../img/instagram.png' alt='Instagram' />
                        <img className='w-18 h-14 rounded mx-2 cursor-pointer' title='Youtube' src='../img/youtube.jpg' alt='Youtube' />

                    </div>
                </div>
            </div>
        </div>
    )
}
