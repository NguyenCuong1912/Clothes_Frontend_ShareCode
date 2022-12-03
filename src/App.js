import React from 'react'
import { createBrowserHistory } from 'history'
import { Router, Switch } from 'react-router';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Client/Home/Home';
import {
  _account,
  _add,
  _admin,
  _edit,
  _female,
  _home,
  _login,
  _male,
  _product,
  _register
} from './utils/util/ConfigPath';
import UserTemplate from './templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import ManageAccount from './pages/Admin/Account/ManageAccount';
import AddAccount from './pages/Admin/Account/AddAccount';
import EditAccount from './pages/Admin/Account/EditAccount';
import ManageProduct from './pages/Admin/Product/ManageProduct';
import AddProduct from './pages/Admin/Product/AddProduct';
import EditProduct from './pages/Admin/Product/EditProduct';
import AccountTemplate from './templates/AccountTemplate/AccountTemplate';
import DetailAccount from './pages/Client/Account/DetailAccount';
import UpdateAccount from './pages/Client/Account/UpdateAccount';
import MaleProduct from './pages/Client/Product/MaleProduct';
import FemaleProduct from './pages/Client/Product/FemaleProduct';




export const history = createBrowserHistory();

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={_home} exact Component={Home} />
        <HomeTemplate path={_male} exact Component={MaleProduct} />
        <HomeTemplate path={_female} exact Component={FemaleProduct} />



        <AccountTemplate path={`${_account}`} exact Component={DetailAccount} />
        <AccountTemplate path={`${_account}${_edit}`} exact Component={UpdateAccount} />



        <UserTemplate path={_login} exact Component={Login} />
        <UserTemplate path={_register} exact Component={Register} />


        <AdminTemplate path={`${_admin}${_account}`} exact Component={ManageAccount} />
        <AdminTemplate path={`${_admin}${_account}${_add}`} exact Component={AddAccount} />
        <AdminTemplate path={`${_admin}${_account}${_edit}/:id`} exact Component={EditAccount} />

        <AdminTemplate path={`${_admin}${_product}`} exact Component={ManageProduct} />
        <AdminTemplate path={`${_admin}${_product}${_add}`} exact Component={AddProduct} />
        <AdminTemplate path={`${_admin}${_product}${_edit}/:id`} exact Component={EditProduct} />












      </Switch>
    </Router>
  )
}
