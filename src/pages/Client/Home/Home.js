import React from 'react'
import {
    _background,
    _banner,
    _banner2,
    _banner3
} from '../../../utils/util/ImagePath'

export default function Home() {
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
            <div className='flex px-8 py-16 justify-around'>
                <img className='h-96' src={_banner2} alt='banner2' />
                <img className='h-96' src={_banner3} alt='banner3' />
            </div>
        </div>
    )
}
