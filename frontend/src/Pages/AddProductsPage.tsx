import React from 'react'
import DashboardHeader from '../Components/DashboardHeader'

const AddProductsPage = () => {
  return (
    <div className='bg-gray-100 w-full ml-[250px] min-h-screen' >
        <div className='bg-white' >
          <DashboardHeader/>
          <div className='h-[50px] p-3 flex items-center space-x-4' >
            <svg fill="none"  viewBox="0 0 22 28"  xmlns="http://www.w3.org/2000/svg" className="w-6 h-4"><path d="M5 6H15" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/><path d="M5 11H15" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/><path d="M5 16H12" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/><path d="M17 26V18" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/><path d="M21 22H13" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/><path d="M12 27H5C2.79086 27 1 25.2091 1 23V5C1 2.79086 2.79086 1 5 1H15C17.2091 1 19 2.79086 19 5V14.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2"/></svg>
            <span>Add Products</span>
          </div>
        </div>
        
    </div>
  )
}

export default AddProductsPage