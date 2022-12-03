import React from 'react'
import { _namni, _nuni } from '../../../utils/util/ImagePath'
import { BsCart2 } from "react-icons/bs";


export default function HomeProduct() {
    return (
        <div className='mx-16 grid grid-cols-2 flex-wrap'>
            <div className='relative m-2 py-2 z-0'>
                <img src={_namni} alt='' />
                <div className='absolute top-4 right-4 w-14 h-14 rounded-full bg-red-600 text-white text-lg font-medium flex items-center justify-center'>10%</div>
                <div className='w-full text-center z-10 -mt-48'>
                    <div className='text-3xl font-bold text-white my-4'>Áo nỉ nam</div>
                    <div className='flex justify-around my-4 text-2xl'>
                        <div className='text-red-500'>
                            299000 <span className='underline'>đ</span>
                        </div>
                        <div className='text-gray-600 line-through'>
                            299000 <span className='underline'>đ</span>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center z-10 '>
                    <button className='px-4 py-2 flex items-center text-2xl font-bold text-red-500 border border-red-500 rounded-md hover:text-red-700 hover:border-red-700'><BsCart2 className='mx-2' /> Thêm vào giỏ hàng</button>
                </div>

            </div>


            <div className='relative m-2 py-2 z-0'>
                <img src={_namni} alt='' />
                <div className='absolute top-4 right-4 w-14 h-14 rounded-full bg-red-600 text-white text-lg font-medium flex items-center justify-center'>10%</div>
                <div className='w-full text-center z-10 -mt-48'>
                    <div className='text-3xl font-bold text-white my-4'>Áo nỉ nam</div>
                    <div className='flex justify-around my-4 text-2xl'>
                        <div className='text-red-500'>
                            299000 <span className='underline'>đ</span>
                        </div>
                        <div className='text-gray-600 line-through'>
                            299000 <span className='underline'>đ</span>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center z-10 '>
                    <button className='px-4 py-2 flex items-center text-2xl font-bold text-red-500 border border-red-500 rounded-md hover:text-red-700 hover:border-red-700'><BsCart2 className='mx-2' /> Thêm vào giỏ hàng</button>
                </div>

            </div>

            <div className='relative m-2 py-2 z-0'>
                <img src={_namni} alt='' />
                <div className='absolute top-4 right-4 w-14 h-14 rounded-full bg-red-600 text-white text-lg font-medium flex items-center justify-center'>10%</div>
                <div className='w-full text-center z-10 -mt-48'>
                    <div className='text-3xl font-bold text-white my-4'>Áo nỉ nam</div>
                    <div className='flex justify-around my-4 text-2xl'>
                        <div className='text-red-500'>
                            299000 <span className='underline'>đ</span>
                        </div>
                        <div className='text-gray-600 line-through'>
                            299000 <span className='underline'>đ</span>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center z-10 '>
                    <button className='px-4 py-2 flex items-center text-2xl font-bold text-red-500 border border-red-500 rounded-md hover:text-red-700 hover:border-red-700'><BsCart2 className='mx-2' /> Thêm vào giỏ hàng</button>
                </div>

            </div>

            <div className='relative m-2 py-2 z-0'>
                <img src={_namni} alt='' />
                <div className='absolute top-4 right-4 w-14 h-14 rounded-full bg-red-600 text-white text-lg font-medium flex items-center justify-center'>10%</div>
                <div className='w-full text-center z-10 -mt-48'>
                    <div className='text-3xl font-bold text-white my-4'>Áo nỉ nam</div>
                    <div className='flex justify-around my-4 text-2xl'>
                        <div className='text-red-500'>
                            299000 <span className='underline'>đ</span>
                        </div>
                        <div className='text-gray-600 line-through'>
                            299000 <span className='underline'>đ</span>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center z-10 '>
                    <button className='px-4 py-2 flex items-center text-2xl font-bold text-red-500 border border-red-500 rounded-md hover:text-red-700 hover:border-red-700'><BsCart2 className='mx-2' /> Thêm vào giỏ hàng</button>
                </div>

            </div>
        </div>
    )
}
