import React from 'react'
import { Link } from 'react-router-dom'
import vector from '../assets/—Pngtree—distribution goods from a warehouse_3565575.png'
import MenuPopup from '../Components/Menu'

const LandingPage = () => {
  return (
    <div className='flex flex-col space-y-[100px] items-center px-6 min-h-screen font-poppins bg-gray-200' >
        <div className='h-[60px] w-full flex justify-between items-center' >
           <span className='text-[20px] sm:text-[23px]' >
                StockX
           </span>
           <div className='hidden sm:space-x-3 sm:flex' >
                <Link to={'/register'}><button className=' w-[120px] h-[35px] '>Register</button></Link>
                <Link to={'/login'}><button className=' w-[120px] h-[35px] bg-blue-500 text-white '>Login</button></Link>
           </div>
           <div className='sm:hidden'>
            <MenuPopup/>
           </div>
        </div>
        <div className=' flex justify-between lg:justify-center items-center space-x-5' >
            <div className='space-y-10 md:space-y-2 flex flex-col justify-center md:p-5' >
                <h1 className='text-[36px] sm:min-text-[36px] lg:text-[40px] font-bold ' >
                    Inventory & Stock <br /> Management  Application
                </h1>
                <p className='text-[16px] sm:text-[19px] md:min-text-[16px] lg:text-[20px] xl:hidden ' >Inventory system to control and manage products in the warehouse in real time and integrated to make it easier to manage your business</p>
                <p className='hidden xl:inline text-[23px] ' >Inventory system to control and manage <br /> products in the warehouse in real time and <br /> integrated to  make it easier to manage your <br /> business</p>
                <Link to={'/register'}><button className='border mt-10 text-white w-[150px] h-[50px] bg-blue-500'>Get Started</button></Link>
            </div>
            <div className='hidden max-w-[500px] max-h-[400px] min-w-[320px] md:inline-block' >
                <img className='bg-gray-200'  src={vector} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LandingPage