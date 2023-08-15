import React from 'react'
import { Link } from 'react-router-dom'
import vector from '../assets/—Pngtree—distribution goods from a warehouse_3565575.png'

const LandingPage = () => {
  return (
    <div className='min-h-screen font-poppins px-[200px] bg-gray-200' >
        <div className='h-[60px]  w-full flex justify-between items-center' >
           <span className='text-[23px]' >
                StockX
           </span>
           <div className='space-x-3' >
                <Link to={'/register'}><button className=' w-[120px] h-[35px] '>Register</button></Link>
                <Link to={'/login'}><button className=' w-[120px] h-[35px] bg-blue-500 text-white '>Login</button></Link>
           </div>
        </div>
        <div className=' flex justify-between items-center h-[655px]' >
            <div className='space-y-5' >
                <h1 className='text-[40px] font-bold ' >
                    Inventory & Stock <br /> Management <br /> Application
                </h1>
                <p className='text-[20px] ' >Inventory system to control and manage products in the <br /> warehouse in real time and integrated to <br /> make it easier to manage your business</p>
                <Link to={'/register'}><button className='border mt-5 text-white w-[150px] h-[50px] bg-blue-500'>Get Started</button></Link>
            </div>
            <div className=' h-[400px] w-[400px] ' >
                <img className='bg-gray-200'  src={vector} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LandingPage