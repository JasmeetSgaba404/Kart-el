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





function App() {
  return (
  <>





<Routes>

<Route path='/' element={<Home />} >
</Route>


<Route path='/mobile' element={<Mobile />} ></Route>


<Route path='/electronics' element={<Electronic />} ></Route>

<Route path='/fashion' element={<Fashion />} ></Route>
<Route path='/furniture' element={<Furniture />} ></Route>

<Route path='/register' element={<Register />} ></Route>

<Route path='/contact' element={<Contact />} ></Route>

<Route path='/login' element={<Login />} ></Route>







<Route path='*' element={<Page />} ></Route>
</Routes>


  </>
  );
}

export default App;
