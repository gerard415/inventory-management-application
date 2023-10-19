import React from 'react'

type DashboardHeaderProps = {
  openSideBar: boolean,
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardHeader = ({openSideBar,setOpenSideBar}: DashboardHeaderProps) => {
    return (
        <div className=' w-[100%] h-[100%] p-4 flex items-center justify-between lg:justify-normal border border-b-gray-200'>
          <div className='flex items-center space-x-4'>
            <button className='lg:hidden' onClick={() => setOpenSideBar(!openSideBar)}>
              {!openSideBar ? 
                <svg className="w-6 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg> : 

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              }
            </button>
            <div className='font-bold text-sky-900 text-[23px] ' >
                stockx
            </div> 
          </div>
          <button className='lg:hidden'>
            <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </button>
            
            <div className='lg:flex items-center h-[40px] hidden ml-[150px]' >
              <span className='bg-gray-100 h-[40px] text-gray-400 flex items-center rounded-l-full pl-3' >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-[18px]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
              </span>
              <input className='bg-gray-100  max-w-[400px] border-none h-[40px] py-3 rounded-r-full ' type="text" placeholder='Search anything'/>
            </div>
        </div>
    )
}

export default DashboardHeader