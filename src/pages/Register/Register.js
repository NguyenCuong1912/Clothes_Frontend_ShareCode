import React from 'react'
import { AiOutlineUser } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { _logo } from '../../utils/util/ImagePath';
import { _login } from './../../utils/util/ConfigPath';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik'
import * as Yup from "yup"
import { RegisterAction } from '../../redux/Actions/ManageUserAction';


export default function Register() {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            Username: '',
            Password: '',
            Role: "ADMIN"
        },
        validationSchema: Yup.object({
            Username: Yup.string()
                .required("Không được trống !"),
            Password: Yup.string()
                .min(6, "Tối thiểu 6 kí tự")
                .required("Không được trống !"),

        }),
        onSubmit: values => {
            dispatch(RegisterAction(values))
        },
    });
    return (
        <div className='pt-48'>
            <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg">
                <div className='flex justify-center py-8 rounded-t-lg' style={{ backgroundColor: '#333F48' }}>
                    <img className='bg-white' src={_logo} alt='Canifa' />
                </div>
                <div className="bg-gray-200 pt-8 pb-16 rounded-b-lg">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="w-4/5 mx-auto">
                            <div className="flex items-center bg-white rounded shadow-md mb-4">
                                <span className="px-3">
                                    <AiOutlineUser className='text-xl' />
                                </span>
                                <input className="w-full h-12 focus:outline-none" type="text" name="Username" onChange={formik.handleChange} placeholder="Tài khoản" />
                            </div>
                            {formik.errors.Username && formik.touched.Username && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.Username}</p>
                            )}
                            <div className="flex items-center bg-white rounded shadow-md mb-4">
                                <span className="px-3">
                                    <svg className="fill-current text-gray-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" /></svg>
                                </span>
                                <input className="w-full h-12 focus:outline-none" type="password" name="Password" onChange={formik.handleChange} placeholder="Mật khẩu" />
                            </div>
                            {formik.errors.Password && formik.touched.Password && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.Password}</p>
                            )}
                            <button type='submit' style={{ backgroundColor: '#333F48' }} className="block mx-auto text-white text-base font-medium uppercase rounded shadow-md px-6 py-2">Đăng ký</button>
                            <div className='mt-4'>
                                <span>Bạn đã có tài khoản?
                                    <NavLink to={_login} className='text-red-500 hover:text-red-700'>Đăng nhập</NavLink>
                                </span>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
