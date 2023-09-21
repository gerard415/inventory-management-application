import React, {useContext, useState} from 'react'
import SideBar from './SideBar'
import {Outlet} from "react-router-dom";
import Loading from './Loading';
import { Navigate } from "react-router-dom";
import { UserContext } from '../UserContext'
import { UserProps } from '../types'

const Layout = () => {
  const {user, ready, redirect}: UserProps = useContext(UserContext)

  if(!ready){
    return <Loading/>
  }

  if(ready && !user && !redirect){
    return <Navigate to={'/login'}/>
  }

  if(ready && !user && redirect){
    return <Navigate to={'/'} /> 
  }
  

  return (
    <div className='flex '>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Layout