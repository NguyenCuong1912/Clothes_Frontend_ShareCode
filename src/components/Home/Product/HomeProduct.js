import { message } from 'antd';
import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { ADD_CART } from '../../../redux/Types/ManageCartType';
import { DOMAIN_IMG } from '../../../utils/Settings/config';


export default function HomeProduct(props) {
    const dispatch = useDispatch()
    const { clothes } = props;

    return (

        <div className='relative m-2 py-2 z-0'>
            <img className='w-full' src={`${DOMAIN_IMG}${clothes.ImageProduct}`} alt='' />
            <div className='absolute top-4 right-4 w-14 h-14 rounded-full bg-red-600 text-white text-lg font-medium flex items-center justify-center'>{clothes.Discount}%</div>
            <div className='w-full text-center z-10 -mt-48'>
                <div className='text-3xl font-bold text-white my-4'>{clothes.ProductName}</div>
                <div className='flex justify-around my-4 text-2xl'>
                    <div className='text-red-500'>
                        {(clothes.Price - clothes.Price * clothes.Discount / 100).toLocaleString()} <span className='underline'>đ</span>
                    </div>
                    <div className='text-gray-600 line-through'>
                        {(clothes.Price * 1).toLocaleString()} <span className='underline'>đ</span>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center z-10 '>
                <button type='button' onClick={() => {
                    dispatch({
                        type: ADD_CART,
                        data: {
                            item: clothes,
                            number: 1
                        }
                    })
                    message.success('Sản phẩm đã được thêm vào giỏ hàng')
                }} className='px-4 py-2 flex items-center text-2xl font-bold text-red-500 border border-red-500 rounded-md hover:text-red-700 hover:border-red-700'><BsCart2 className='mx-2' /> Thêm vào giỏ hàng</button>
            </div>

        </div>
    )
}
