import React from 'react'
import {Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar'

function Portal() {
  return (
   <div>
        <Navbar/>
        <Outlet/>
       
    </div>
  )
}

export default Portal