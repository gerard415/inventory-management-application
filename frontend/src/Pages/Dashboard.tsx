import React, {useContext, useState, useEffect} from 'react'
import { Navigate } from "react-router-dom";
import { UserContext } from '../UserContext'
import { UserProps } from '../types'
import Loading from '../Components/Loading';
import Layout from '../Components/Layout';

const Dashboard = () => {
    const {setUser, user, ready}: UserProps = useContext(UserContext)
    const [redirect,setRedirect] = useState<boolean>(false);


    if(!ready){
      return <Loading/>
    }

    if(ready && !user){
      return <Navigate to={'/login'}/>
    }

    const handleLogout = () => {
      setUser(null)
      localStorage.removeItem("user")
      setRedirect(true)
    }
    
    if(!user && redirect){
      return <Navigate to={'/'} /> 
    }


    return (
      <div className='flex flex-col'>
        <Layout/>
        {/* <button className='border border-black w-[100px]' onClick={handleLogout} >Log Out</button> */}
      </div>
    )
}

export default Dashboard