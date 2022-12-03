import { message } from "antd";
import { _home, _login } from "../../utils/util/ConfigPath";
import { CLEAR_CART, GET_LIST_CART } from "../Types/ManageCartType";
import { USER_LOGIN } from "../Types/ManageUserType"
import { history } from './../../App';
import { manageCheckoutService } from './../../services/ManageCheckoutService';




export const CheckoutAction = (data) => {
    return async dispatch => {
        if (JSON.parse(sessionStorage.getItem(USER_LOGIN))) {
            const id = JSON.parse(sessionStorage.getItem(USER_LOGIN)).account.id;
            try {
                const dataCheckout = {
                    Account_ID: id,
                    ListProduct: data
                }
                const result = await manageCheckoutService.checkout(dataCheckout);
                if (result.status === 200) {
                    dispatch({
                        type: CLEAR_CART
                    })
                    alert("Thanh toán thành công!")
                    history.push(`${_home}`)
                }
                else {
                    alert('Thanh toán không thành công!')

                }
            } catch (error) {
                console.log('error', error.response?.data)
                message.warning('Thanh toán không thành công!')
            }
        }
        else {
            alert('Bạn phải đăng nhập trước!')
            history.push(`${_login}`)
        }
    }
}


export const GetListBill = () => {
    return async dispatch => {
        try {
            const result = await manageCheckoutService.getListBill();
            console.log('result', result)
            // if (result.status === 200) {
            //     dispatch({
            //         type: GET_LIST_CART,
            //         data: result.data,
            //     })
            // }
        } catch (error) {
            console.log('error', error.response?.data)
            message.warning('Lấy thông tin không thành công!')
        }
    }
}