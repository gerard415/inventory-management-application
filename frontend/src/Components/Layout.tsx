import React, {useContext, useState} from 'react'
import SideBar from './SideBar'
import {Outlet} from "react-router-dom";
import Loading from './Loading';
import { Navigate } from "react-router-dom";
import { UserContext } from '../UserContext'
import { UserProps } from '../types'
import DashboardHeader from './DashboardHeader';

const Layout = () => {
  const {user, ready, redirect}: UserProps = useContext(UserContext)
  const [openSideBar, setOpenSideBar] = useState(false)

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
    <div className=' max-w-screen h-screen'>
      <div className='bg-white sticky top-0 w-full z-30 h-[10%]'>
        <DashboardHeader openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      </div>
      <div className='flex h-[90%]'>
        <div className='w-[240px] hidden lg:inline h-full'>
          <SideBar/>
        </div>
        {openSideBar? 
        <div className='lg:hidden w-[240px] fixed z-30 bg-white h-full'>
          <SideBar/>
        </div> : 
        <div className='hidden'>
          <SideBar/>
        </div>
        }
        <div className={openSideBar ? 'w-full min-h-full bg-gray-900 opacity-50 lg:bg-gray-100 lg:opacity-100 overflow-y-auto' : 'w-full bg-gray-100 min-h-full overflow-y-auto '}  onClick={() => setOpenSideBar(false)} >
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout