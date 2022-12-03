

import { baseService } from './baseService';


class ManageCheckoutService extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }

    checkout = (data) => {
        return this.post('Checkout', data)
    }


    getListBill = () => {
        return this.get(`Checkout`)
    }

}


export const manageCheckoutService = new ManageCheckoutService();
