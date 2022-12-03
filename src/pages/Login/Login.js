import React from 'react'
import { AiFillFacebook, AiOutlineUser } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { _register } from './../../utils/util/ConfigPath';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { LoginAction } from '../../redux/Actions/ManageUserAction';

export default function Login() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            Username: '',
            Password: ''
        },

        onSubmit: values => {
            dispatch(LoginAction(values))
        },
    });

    return (
        <div className='pt-48'>
            <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg">
                <div className="text-center text-gray-600 py-4">Đăng nhập với</div>
                <div className="flex justify-center mb-10">
                    <button className="flex items-center text-blue-600 bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
                        <AiFillFacebook className='text-2xl mr-2' />
                        <div className="text-base font-medium">Facebook</div>
                    </button>
                    <button className="flex items-center text-red-500 bg-gray-100 shadow-md border border-gray-200 rounded px-4 py-2 mr-2">
                        <FcGoogle className='text-2xl mr-2' />
                        <div className="text-base font-medium">Google</div>
                    </button>
                </div>
                <div className="bg-gray-200 pt-8 pb-16 rounded-b-lg">
                    <div className="text-center text-gray-600 mb-6">Hoặc đăng nhập bằng Tài khoản &amp; Mật khẩu</div>
                    <div className="w-4/5 mx-auto">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="flex items-center bg-white rounded shadow-md mb-4">
                                <span className="px-3">
                                    <AiOutlineUser className='text-xl' />
                                </span>
                                <input className="w-full h-12 focus:outline-none" type="text" name="Username" onChange={formik.handleChange} placeholder="Tài khoản" />
                            </div>
                            <div className="flex items-center bg-white rounded shadow-md mb-4">
                                <span className="px-3">
                                    <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" /></svg>
                                </span>
                                <input className="w-full h-12 focus:outline-none" type="password" name="Password" onChange={formik.handleChange} placeholder="Mật khẩu" />
                            </div>
                            <div className="mb-4">
                                <input type="checkbox" name="remember" className="mr-1" />
                                <label htmlFor="remember" className="text-sm text-gray-600">Nhớ Tài khoản &amp; Mật khẩu</label>
                            </div>
                            <button type='submit' style={{ backgroundColor: '#333F48' }} className="block mx-auto text-white text-base font-medium uppercase rounded shadow-md px-6 py-2">Đăng nhập</button>
                            <div className='mt-4'>
                                <span>Bạn chưa có tài khoản?
                                    <NavLink to={_register} className='ml-2 text-red-500 hover:text-red-700'>Đăng ký</NavLink>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
