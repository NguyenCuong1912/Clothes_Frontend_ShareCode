import React from 'react'
import { DOMAIN_IMG } from '../../../utils/Settings/config';
import { useDispatch } from 'react-redux';
import { ADD_CART } from '../../../redux/Types/ManageCartType';
import { message } from 'antd';

export default function OneProduct(props) {
    const dispatch = useDispatch();
    const { clothes } = props;
    return (
        <div className='border m-4 relative'>
            <div className='absolute top-4 right-4 w-12 h-12 rounded-full bg-red-600 text-white font-medium text-base flex items-center justify-center'>{clothes.Discount}%</div>
            <img src={`${DOMAIN_IMG}${clothes.ImageProduct}`} alt='' />
            <div className='text-base m-4 '>
                <div className='text-lg'>{clothes.ProductName}</div>
                <div className='text-red-600 font-bold'>{(clothes.Price - clothes.Price * clothes.Discount / 100).toLocaleString()}<span className='underline'>đ</span></div>
                <div className='line-through'>{(clothes.Price * 1).toLocaleString()} <span className='underline'>đ</span></div>
                <div className='w-full text-center my-4'>
                    <button type='button' onClick={() => {
                        dispatch({
                            type: ADD_CART,
                            data: {
                                item: clothes,
                                number: 1
                            }
                        })
                        message.success('Sản phẩm đã được thêm vào giỏ hàng')
                    }} className='px-4 py-2 font-medium border rounded-md text-red-500 border-red-500 hover:bg-red-500 hover:text-white'>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </div>
    )
}
