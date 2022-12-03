import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineDoubleRight, AiOutlineQrcode } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import { _appstore, _bo, _ggplay, _pay } from '../../../utils/util/ImagePath';

export default function Footer() {
    return (
        <div style={{ backgroundColor: '#333F48' }}>
            <div className='grid grid-cols-4 px-16 text-white border-b border-white'>
                <div className='py-8 px-10 text-base'>
                    <div className='uppercase font-medium mb-4'>CÔNG TY CỔ PHẦN CANIFA</div>
                    <div className='my-2 flex'><AiOutlineDoubleRight className='text-2xl mr-2' />Số ĐKKD: 0107574310, ngày cấp: 23/09/2016, nơi cấp: Sở Kế hoạch và đầu tư Hà Nội</div>
                    <div className='my-2 flex'><AiOutlineDoubleRight className='text-2xl mr-2' />Trụ sở chính: Số 688, Đường Quang Trung, Phường La Khê, Quận Hà Đông, Hà Nội, Việt Nam</div>
                    <div className='my-2 flex'><AiOutlineDoubleRight className='text-2xl mr-2' />Địa chỉ liên hệ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội</div>
                    <div className='my-2 flex'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Số điện thoại: +8424 - 7333.2222</div>
                    <div className='my-2 flex'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Fax: +8424 - 6277.6666</div>
                    <div className='my-2 flex'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Địa chỉ email: dang@canifa.com</div>
                </div>

                <div className='py-8 px-32 text-base'>
                    <div className='uppercase font-medium mb-4'>THƯƠNG HIỆU</div>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Giới thiệu</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Tin tức</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Tuyển dụng</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Với cộng đồng</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Hệ thống cửa hàng</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Liên hệ</NavLink>
                </div>

                <div className='py-8 px-28 text-base'>
                    <div className='uppercase font-medium mb-4'>Hỗ trợ</div>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Hỏi đáp</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Chính sách KHTT</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Chính sách vận chuyển</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Hướng dẫn chọn size</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Kiểm tra đơn hàng</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Quy định đổi hàng</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Tra cứu điểm thẻ</NavLink>
                    <NavLink to='' className='my-2 flex hover:ml-2 text-white hover:text-red-500'><AiOutlineDoubleRight className='text-sm mr-2 mt-1' />Chính sách bảo mật</NavLink>
                </div>

                <div className='py-8 px-16 text-base'>
                    <div className='uppercase font-medium mb-4'>Tải ứng dụng trên điện thoại</div>
                    <div className='flex justify-around'>
                        <AiOutlineQrcode className='text-4xl' />
                        <img src={_ggplay} alt='Google Play' />
                        <img src={_appstore} alt='App Store' />
                    </div>
                    <div className='uppercase font-medium my-4'>Phương thức thanh toán</div>
                    <img className='my-2' src={_pay} alt='pay' />
                    <img className='my-4' src={_bo} alt='pay' />

                </div>
            </div>
            <div className='mx-12 py-4 text-white flex justify-between'>
                <div>Created by Hai Dang</div>
                <div className='flex'>Visit Us <AiFillFacebook title='Facebook' className='text-2xl mx-2 cursor-pointer' /> <AiFillInstagram title='Instagram' className='text-2xl mx-2 cursor-pointer' /></div>
            </div>
        </div>
    )
}
