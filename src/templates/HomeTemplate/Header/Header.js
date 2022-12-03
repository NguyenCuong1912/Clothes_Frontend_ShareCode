import React, { Fragment } from 'react'
import TopSlick from '../../../components/Home/Slick/TopSlick';
import { _logo } from './../../../utils/util/ImagePath';
import { NavLink } from 'react-router-dom';
import { _account, _home, _login, _register } from './../../../utils/util/ConfigPath';
import NavHeader from '../../../components/Home/Navbar/NavHeader';
import {
    AiOutlineShopping,
    AiOutlineUser,
} from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Dropdown, Menu, Space } from 'antd';
import { USER_LOGIN } from '../../../redux/Types/ManageUserType';
import _ from 'lodash'
import { history } from '../../../App';


export default function Header() {

    const { userLogin } = useSelector(state => state.ManageUserReducer);

    const menu = (
        <Menu
            items={[
                {
                    label: <button onClick={() => {
                        history.push(`${_account}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:text-red-500">Thông tin tài khoản</button>,
                    key: '0',
                },
                {
                    label: <Fragment>
                        <button onClick={() => {
                            // history.push(`${_order}/${userLogin.account.id}`);
                            window.location.reload();
                        }} className="self-center px-4 py-2 hover:text-red-500">Lịch sử đặt hàng</button>
                    </Fragment>,
                    key: '1',
                },
                {
                    label: <button onClick={() => {
                        sessionStorage.removeItem(USER_LOGIN);
                        history.push(`${_home}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:text-red-500">Đăng xuất</button>,
                    key: '2',
                },
            ]}
        />
    )
    const operations = <Fragment>
        {!_.isEmpty(userLogin) ?
            <Dropdown
                overlay={menu}
                trigger={['click']}
            >
                <span onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className='flex items-center text-white ml-4 cursor-pointer'>
                            <AiOutlineUser className='text-2xl mr-1' />
                            <span className='flex items-center text-lg font-bold '>Xin chào!, {userLogin.account.Username}</span>
                        </div>
                    </Space>
                </span>
            </Dropdown>
            : <Fragment>
                <NavLink to={_login} className='p-2 mx-2 text-gray-400 border rounded hover:border-red-500 hover:text-red-500'>
                    <span>Đăng nhập</span>
                </NavLink>
                <NavLink to={_register} className='p-2 border text-gray-400 rounded hover:border-red-500 hover:text-red-500'>
                    <span>Đăng ký</span>
                </NavLink>
            </Fragment>}
    </Fragment>

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
                        <div className='col-start-3 col-span-2'>
                            <div className='h-full flex items-center justify-end'>
                                {operations}
                                <AiOutlineShopping className='mx-2 text-2xl text-gray-400' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
