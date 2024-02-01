import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Link, } from 'react-router-dom';



import Nav from './components/Layouts/Header.jsx';
import Footer from './components/Layouts/Footer.jsx';
import Home from './pages/Home.jsx';
import Mobile from './pages/Mobile.jsx';
import Page from './pages/Pagenot.jsx';
import Register from './pages/Auth/registerform.jsx';
import Electronic from './pages/electronics.jsx';
import Fashion from './pages/fashion.jsx';
import Furniture from './pages/furniture.jsx';
import Contact from './pages/Auth/Contactform.jsx';
import Login from './pages/Auth/loginform.jsx';
import Layout from './components/Layouts/layout.jsx';
import Forget from './pages/Auth/forgetPassword.jsx';
import Dashboard from './pages/User/Dasboard.jsx';
import PrivateRoute from './components/Layouts/routes/Private.jsx';
import AdminRoute from './components/Layouts/routes/AdminRoute.jsx';
import AdminDashboard from './pages/admin/admindashboard.jsx';
import CreateCategories from './pages/admin/create-category.jsx';
import CreateProducts from './pages/admin/create-product.jsx';
import AdminOrders from './pages/admin/orders.jsx';
import AdminProducts from './pages/admin/products.jsx';
import UpdateProduct from './pages/admin/update-product.jsx';
import Search from './pages/Search.jsx';
import ProductDetails from './pages/Productdetails.jsx';






function App() {
  return (
  <>





<Routes>

<Route path='/' element={<Home />} >
</Route>


<Route path='/mobile' element={<Mobile />} ></Route>


<Route path='/search' element={<Search />} ></Route>
<Route path='/product/:slug' element={<ProductDetails />} ></Route>

<Route path='/electronics' element={<Electronic />} ></Route>

<Route path='/fashion' element={<Fashion />} ></Route>
<Route path='/furniture' element={<Furniture />} ></Route>

<Route path='/register' element={<Register />} ></Route>

<Route path='/contact' element={<Contact />} ></Route>

<Route path='/login' element={<Login />} ></Route>

<Route path='/forgot' element={<Forget />} ></Route>



<Route path="/dashboard" element={<PrivateRoute />} >
<Route path='user' element={<Dashboard />} ></Route>
  
   </Route>

<Route path="/dashboard" element={<AdminRoute />} >
  
<Route path='admin' element={<AdminDashboard />} ></Route>

<Route path='/dashboard/admin/create-category' element={<CreateCategories />} ></Route>

<Route path='/dashboard/admin/create-product' element={<CreateProducts />} ></Route>

<Route path='/dashboard/admin/products/:slug' element={<UpdateProduct />} ></Route>

<Route path='/dashboard/admin/products' element={<AdminProducts />} ></Route>

<Route path='/dashboard/admin/orders' element={<AdminOrders />} ></Route>


  
   </Route>
 





<Route path='*' element={<Page />} ></Route>
</Routes>


  </>
  );
}

export default App;
