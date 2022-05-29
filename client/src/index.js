import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UrlStats from './components/UrlStats';

import Redirect from './components/Redirect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/stats/:id' element={<UrlStats />} />
      <Route path=':shortUrl' element={<Redirect />} />
    </Routes>
  </BrowserRouter>
);
