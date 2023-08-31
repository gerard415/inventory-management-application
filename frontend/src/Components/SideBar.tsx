import React,{useState, useContext} from 'react'
import { NavLink } from 'react-router-dom'
import Loading from './Loading';
import { Navigate } from "react-router-dom";
import { UserContext } from '../UserContext'
import { UserProps } from '../types'

const SideBar = () => {
    const {setUser, user, ready}: UserProps = useContext(UserContext)
    const [redirect,setRedirect] = useState<boolean>(false);


    if(!ready){
      return <Loading/>
    }

    if(ready && !user && !redirect){
      return <Navigate to={'/login'}/>
    }

    const handleLogout = () => {
      setUser(null)
      localStorage.removeItem("user")
      setRedirect(true)
    }
    
    if(!user && redirect){
        console.log('logged out')
        return <Navigate to={'/'} /> 
    }

    return (
        <div className='w-[290px] h-screen  flex flex-col space-y-8 shadow-md fixed top-0 left-0 text-gray-500 '>
            <div className='flex items-center sticky top-0 z-10 border pl-9 font-bold border-b-gray-300 h-[70px] text-sky-900 text-[30px] ' >
                StockX
            </div>
            <br />
            <div className='space-y-9 '>
                <NavLink to={'/dashboard'}  end>
                    {({ isActive}) => (
                        <div className=' w-full h-[30px] flex items-center  pl-9 space-x-4' >
                            <span className={isActive ? 'h-10 w-10 bg-blue-200 rounded-full bg-opacity-25 flex justify-center items-center' : 'h-10 w-10 rounded-full flex justify-center items-center'} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={isActive? "w-5 h-5 text-blue-900 z-10": 'w-5 h-5'}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
                            </span>
                            <span className={isActive ? "text-blue-500" : ""}>Dashboard</span>
                        </div>
                    )}
                </NavLink>
                <NavLink to={'/dashboard/products'} className=' w-full h-[30px] flex items-center space-x-4 '>
                    {({ isActive}) => (
                        <div className=' w-full h-[30px] flex items-center  pl-9 space-x-4' >
                            <span className={isActive ? 'h-10 w-10 bg-blue-200 rounded-full bg-opacity-25 flex justify-center items-center' : 'h-10 w-10 rounded-full flex justify-center items-center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={isActive? "w-5 h-5 text-blue-900": 'w-5 h-5'}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>
                            </span>
                            <span className={isActive ? "text-blue-500" : ""}>Products</span>
                        </div>
                    )}  
                </NavLink>
                <NavLink to={'/dashboard/addproducts'} className=' w-full h-[30px] flex items-center space-x-4 '>
                    {({ isActive}) => (
                        <div className=' w-full h-[30px] flex items-center  pl-9 space-x-4' >
                            <span className={isActive ? 'h-10 w-10 bg-blue-200 rounded-full bg-opacity-25 flex justify-center items-center' : 'h-10 w-10 rounded-full flex justify-center items-center'}>
                                <svg fill="none"  viewBox="0 0 22 28"  xmlns="http://www.w3.org/2000/svg" className={isActive? "w-5 h-4 text-blue-900": 'w-5 h-4'}><path d="M5 6H15" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/><path d="M5 11H15" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/><path d="M5 16H12" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/><path d="M17 26V18" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/><path d="M21 22H13" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/><path d="M12 27H5C2.79086 27 1 25.2091 1 23V5C1 2.79086 2.79086 1 5 1H15C17.2091 1 19 2.79086 19 5V14.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/></svg>
                            </span>
                            <span className={isActive ? "text-blue-500" : ""}>Add Products</span>
                        </div>
                    )}  
                </NavLink>
                <NavLink to={'/dashboard/profile'} className=' w-full h-[30px] flex items-center space-x-4  '>
                    {({ isActive}) => (
                        <div className=' w-full h-[30px] flex items-center  pl-9 space-x-4' >
                            <span className={isActive ? 'h-10 w-10 bg-blue-200 rounded-full bg-opacity-25 flex justify-center items-center' : 'h-10 w-10 rounded-full flex justify-center items-center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={isActive? "w-5 h-5 text-blue-900": 'w-5 h-5'}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
                            </span>
                            <span className={isActive ? "text-blue-500" : ""}>Profile</span>
                        </div>
                    )} 
                </NavLink>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className='w-full h-[30px] items-center justify-center '>
                <button className='w-full pl-9 flex space-x-4 ' onClick={handleLogout} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" /></svg>
                    <span>Log Out</span>
                </button>
            </div>
            
        </div>
    )
}

export default SideBar