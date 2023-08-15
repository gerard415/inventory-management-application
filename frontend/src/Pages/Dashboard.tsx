import React, {useContext, useState} from 'react'
import { Navigate } from "react-router-dom";
import { UserContext } from '../UserContext'
import { UserProps } from '../types'

const Dashboard = () => {
    const {setUser, user}: UserProps = useContext(UserContext)
    const [redirect,setRedirect] = useState<boolean>(false);

    const handleLogout = () => {
      setUser({})
      localStorage.removeItem("user")
      setRedirect(true)
    }

    if(redirect){
      return <Navigate to={'/'} />
    }

    if(!user){
      return <Navigate to={'/register'}/> 
    }

    return (
      <div className='flex flex-col'>
        <p>DashBoard</p>
        <p>{user.name}</p>
        <button className='border border-black w-[100px]' onClick={handleLogout} >Log Out</button>
      </div>
    )
}

export default Dashboard