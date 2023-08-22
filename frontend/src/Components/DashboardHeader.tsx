import React from 'react'

const DashboardHeader = () => {
    return (
        <div className='h-[70px] border-b p-4 flex items-center'>
            <div className='flex items-center h-[40px]' >
              <span className='bg-gray-100 h-[40px] text-gray-400 flex items-center rounded-l-full pl-3' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-[18px]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
              </span>
              <input className='bg-gray-100 w-[400px] h-[40px] py-3 rounded-r-full ' type="text" placeholder='Search anything'/>
            </div>
        </div>
    )
}

export default DashboardHeader