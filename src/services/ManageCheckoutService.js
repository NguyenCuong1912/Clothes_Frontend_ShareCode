

import { baseService } from './baseService';


class ManageCheckoutService extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    checkout = (data) => {
        return this.post('Checkout', data)
    }

    getBillDetail = (id) => {
        return this.get(`Checkout/Detail/${id}`)
    }

    getCheckout = (Id) => {
        return this.get(`Checkout/ByAccount/${Id}`)
    }


    getListBill = () => {
        return this.get(`Checkout`)
    }

}


export const manageCheckoutService = new ManageCheckoutService();
