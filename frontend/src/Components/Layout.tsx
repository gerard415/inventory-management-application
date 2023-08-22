import React from 'react'
import SideBar from './SideBar'
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className='flex '>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Layout