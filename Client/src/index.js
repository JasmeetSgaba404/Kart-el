import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.js';
import { AuthProvider } from './context/auth.jsx';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from './context/search.jsx';




ReactDOM.render(
  <>
    <AuthProvider>
      <SearchProvider>
      <BrowserRouter>

        <App />

      </BrowserRouter>
      </SearchProvider>
    </AuthProvider>




  </>
  ,

  document.getElementById('root')

);


