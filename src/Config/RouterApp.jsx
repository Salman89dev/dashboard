import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,} from "react-router-dom";
import Dashboards from '../Pages/Dashboard';
// import { Login } from '@mui/icons-material';
import Layout from '../Components/Layout';
import OrderList from '../Pages/OrderList';
import OrderDetail from '../Pages/OrderDetail';
import Customer from '../Pages/Customer';
import Analytics from '../Pages/Analytics';
import CustomerReviews from '../Pages/Reviews';
import Foods from '../Pages/Foods';

const RouterApp = () => {
    const router=createBrowserRouter(
        createRoutesFromElements(
            <Route path='' element={<Layout/>}>
                <Route path='/' element={<Dashboards />}/>
                <Route path='orderlist' element={<OrderList />}/>
                <Route path='orderetail' element={<OrderDetail />}/>
                <Route path='customer' element={<Customer />}/>
                <Route path='analytics' element={<Analytics />}/>
                <Route path='customerreviews' element={<CustomerReviews />}/>
                <Route path='foods' element={<Foods />}/>
            </Route>
        )
    )
  return (
    <div>
            <RouterProvider router={router} />
    </div>
  )
}

export default RouterApp
