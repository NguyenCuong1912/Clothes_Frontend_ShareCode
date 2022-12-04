import React, { Fragment, useEffect } from 'react'
import { Input, Table, Popconfirm } from 'antd';
import { history } from '../../../App';
import { _add, _admin, _edit, _product } from '../../../utils/util/ConfigPath';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProductAction, GetAllProductAction } from '../../../redux/Actions/ManageProductAction';
import { DOMAIN_IMG } from '../../../utils/Settings/config';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


const { Search } = Input;

export default function ManageProduct() {

    const dispatch = useDispatch();

    const { lstProduct } = useSelector(state => state.ManageProductReducer);

    useEffect(() => {
        dispatch(GetAllProductAction())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onSearch = (value) => {
        dispatch(GetAllProductAction(value))
    };
    const cancel = (e) => {
        console.log(e);
    };
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '2%'
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'ProductName',
            width: '10%',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'ImageProduct',
            render: (text, item) => {
                return <Fragment>
                    <img className='h-36 w-36' src={`${DOMAIN_IMG}${item.ImageProduct}`} alt={item.ProductName} />
                </Fragment>
            },
            width: '12%'

        },
        {
            title: 'Giới tính',
            dataIndex: 'TypeGender',
            render: (text, item) => {
                return <Fragment>
                    {item.TypeGender ? 'Nam' : 'Nữ'}
                </Fragment>
            },
            width: '10%',
        },
        {
            title: 'Mô tả',
            dataIndex: 'Description',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'Price',
            width: '10%',
            render: (text, item) => {
                return <Fragment>
                    {(item.Price * 1).toLocaleString()} <span className='underline'>đ</span>
                </Fragment>
            },

        },
        {
            title: 'Giảm giá',
            dataIndex: 'Discount',
            width: '10%',
            render: (text, item) => {
                return <Fragment>
                    {item.Discount} %
                </Fragment>
            },

        },

        {
            title: '',
            dataIndex: 'id',
            render: (text, item) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={() => {
                        history.push(`${_admin}${_product}${_edit}/${item.id}`)
                    }}>
                        <EditOutlined style={{ fontSize: 25 }} />
                    </button>
                    <button className='mx-4 text-red-500 hover:text-red-900' title='Xóa'>
                        <Popconfirm
                            title="Bạn có muốn xóa sản phẩm không?"
                            onConfirm={() => { dispatch(DeleteProductAction(item.id)) }}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined style={{ fontSize: 25 }} />
                        </Popconfirm>
                    </button>
                </div>
            },
            width: '10%'

        },

    ]

    return (
        <Fragment>
            <div className='mt-4'>
                <h2 className='text-4xl font-bold text-center text-red-500'>Quản lý quần áo</h2>
                <div className='my-10 flex justify-between'>
                    <button type='button' className='border-2 border-red-600 rounded w-24 h-10 text-lg font-bold text-red-500 hover:text-white hover:bg-red-600' onClick={() => {
                        history.push(`${_admin}${_product}${_add}`)
                    }}>Thêm </button>
                    <div className='w-1/3'>
                        <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                    </div>
                </div>
                <Table dataSource={lstProduct} columns={columns} rowKey='id' />;
            </div>
        </Fragment>
    )
}
