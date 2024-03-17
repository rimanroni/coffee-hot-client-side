import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Category/>
      <Footer/>
    </div>
  );
};

export default App;