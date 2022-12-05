import { Input, Select } from 'antd';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { GetDetailProductAction, UpdateProductAction } from '../../../redux/Actions/ManageProductAction';
import { DOMAIN_IMG } from '../../../utils/Settings/config';
import { _admin, _product } from '../../../utils/util/ConfigPath';
import { AiOutlineRollback } from 'react-icons/ai';



const { TextArea } = Input;
export default function EditProduct(props) {
    let { id } = props.match.params;

    const dispatch = useDispatch();

    const { detailProduct } = useSelector(state => state.ManageProductReducer);


    useEffect(() => {
        dispatch(GetDetailProductAction(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const numberRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            ProductName: detailProduct.ProductName,
            TypeGender: detailProduct.TypeGender,
            Price: detailProduct.Price,
            Discount: detailProduct.Discount,
            Description: detailProduct.Description,
            products: null,
        },
        validationSchema: Yup.object({
            ProductName: Yup.string()
                .required("Không được trống !"),

            TypeGender: Yup.string()
                .required("Không được trống !"),

            Price: Yup.string().matches(numberRegExp, 'Giá tiền phải là số...')
                .required("Không được trống !"),

            Discount: Yup.string()
                .required("Không được trống !"),

            Description: Yup.string()
                .required("Không được trống !"),


        }),
        onSubmit: values => {
            values.Discount *= 1;

            let dataClothes = new FormData();
            for (let key in values) {
                if (key !== 'products') {
                    dataClothes.append(key, values[key]);
                }
                else {
                    if (values.products !== null) {
                        dataClothes.append('products', values.products, values.products.name);
                    }
                }
            }

            dispatch(UpdateProductAction(id, dataClothes));

        }
    })
    function changeSelect(value) {
        formik.setFieldValue('TypeGender', value)
    }
    const [img, setImg] = useState('');
    const handleChangeFile = async (e) => {

        let file = e.target.files[0]
        if (file.type === 'image/jpeg' || file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
            await formik.setFieldValue('products', file)
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImg(e.target.result) //Hinh base 64
            }
        }

    }
    return (
        <Fragment>
            <div>
                <div>
                    <button type='button' title='Trở về trang sản phẩm' className='text-2xl py-2 px-5 border-2 border-red-500 rounded-md text-red-500 hover:bg-red-500 hover:text-white' onClick={() => {
                        history.push(`${_admin}${_product}`)
                    }}>
                        <AiOutlineRollback />
                    </button>
                </div>
                <h1 className='text-center text-4xl font-bold text-red-500'>Cập nhật sản phẩm</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className='grid grid-cols-7'>
                        <div className='col-start-2 col-span-2 mr-4'>
                            <div className='my-4'>
                                <div>Tên sản phẩm:</div>
                                <input type='text' name='ProductName'
                                    onChange={formik.handleChange} value={formik.values.ProductName} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Tên sản phẩm...' />
                                {formik.errors.ProductName && formik.touched.ProductName && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.ProductName}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Giới tính:</div>
                                <Select
                                    value={formik.values.TypeGender}
                                    className='w-2/3 drop-shadow-lg' size='large' placeholder='Chọn giới tính...' name='TypeGender'
                                    onChange={changeSelect}
                                    options={[
                                        {
                                            value: true,
                                            label: 'Nam',
                                        },
                                        {
                                            value: false,
                                            label: 'Nữ',
                                        },

                                    ]}
                                />
                                {formik.errors.TypeGender && formik.touched.TypeGender && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.TypeGender}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Giá tiền:</div>
                                <input type='text' name='Price' onChange={formik.handleChange} value={formik.values.Price} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Giá tiền...' />
                                {formik.errors.Price && formik.touched.Price && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Price}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Ưu đãi:</div>
                                <input type='text' name='Discount' onChange={formik.handleChange} value={formik.values.Discount} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-blue-400 focus:outline-none focus:border focus:border-blue-400' placeholder='Ưu đãi...' />
                                {formik.errors.Discount && formik.touched.Discount && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Discount}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <span className='mr-2'>Hình ảnh:</span>
                                <input type='file' onChange={handleChangeFile} accept='image/jpeg, image/jpg, image/png' />
                            </div>
                            <div className='my-4'>
                                <img className='w-36 h-36 rounded-md' src={img === '' ? `${DOMAIN_IMG}${detailProduct?.ImageProduct}` : img} alt={detailProduct.ProductName} />
                            </div>
                        </div>
                        <div className='col-span-3 ml-4'>
                            <div className='my-4'>
                                <div>Mô tả:</div>
                                <TextArea name='Description' onChange={formik.handleChange} value={formik.values.Description} rows={9} style={{ boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px' }} />
                                {formik.errors.Description && formik.touched.Description && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Description}</p>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className='text-center'>
                        <button type='submit' className='text-center p-3 border border-red-600 w-36 text-xl font-bold rounded text-red-600 hover:bg-red-600 hover:text-white'>Cập nhật</button>
                    </div>
                </form>

            </div>
        </Fragment>
    )
}
