import React, { useEffect, useState } from 'react'
import DashboardHeader from '../Components/DashboardHeader'
import Loading from '../Components/Loading'
import axios from 'axios'
import { productProps } from '../types'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<productProps>([])
  const [details, setDetails] = useState<productProps>([])

  let value: number
  let view
  let outOfStock: productProps
  let categories
  
  useEffect(() => {
    setLoading(true)
    axios.get('/products').then(({data}) => {
      const result = data.products.length > 7 ? data.products.slice(0,7) : data.products
      setProducts(result)
      setDetails(data.products)
    })
    
    setLoading(false)
  }, [])

  categories = new Set(details.map(detail => detail.category))

  value = details.reduce((prevVal, currentVal) => {
      return prevVal + currentVal.price
  }, 0)

  outOfStock = details.filter(detail => detail.quantity === 0)

  view =  products.map((product) => (
            <div  className='border border-gray-200 h-[40px] space-x-4 rounded-b flex text-[13px] items-center px-3'>
              <div className='w-[300px] space-x-4 flex'>
                <div>
                  {product.images.length > 0 ? <div><img className='h-[30px] w-[30px]'  src={product.images[0].filePath } alt="" /></div> : <div className='bg-gray-300 h-[30px] w-[30px]'></div> }
                  
                </div>
                <p>
                  {product.name.length<30 ? product.name : (product.name.slice(0, 30) + '...')}
                </p>
                
              </div>
              <p className='w-[135px]'>{product.category.length<30 ? product.category : (product.category.slice(0, 30) + '...')}</p>
              <p className='w-[94px] overflow-auto'>{product.price}</p>
              <p className='w-[110px] overflow-auto'>{product.quantity}</p>
              <p className='w-[250px]'>{product.description.length< 30 ? product.description : (product.description.slice(0, 30) + '...')}</p>
              <p className=''>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                  </svg>
                </button>
              </p>
            </div>
          ))

  return (
    <div className='bg-gray-100 w-full ml-[290px] min-h-screen' >
      <div className='bg-white sticky top-0 z-10'>
        <DashboardHeader/>
      </div>
      <div className='p-5 flex justify-center items-center min-h-[647px]'>
        <div className='bg-white min-h-[600px] w-full rounded-md flex flex-col p-5 px-[30px] space-y-3 text-gray-600 justify-between'>
          <div>
            <div className='mb-5'>
              <span>Dashboard</span>
            </div>
            <div className='flex space-x-8'>
              <div className='bg-cyan-500 opacity-50 w-[260px] h-[100px] text-white flex items-center justify-center space-x-5 '>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[60px] ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                  </svg>
                </span>
                <div className='flex flex-col text-[20px] '>
                  <span>Total Products</span>
                  <span className='font-bold'>{details.length}</span>
                </div>
              </div>
              <div className='bg-green-500 opacity-50 w-[260px] h-[100px] text-white flex items-center justify-center space-x-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[60px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className='flex flex-col text-[20px] '>
                  <span>Store Value</span>
                  <span className='font-bold'>{value}</span>
                </div>
              </div>
              <div className='bg-amber-500 opacity-50 w-[260px] h-[100px] text-white flex items-center justify-center space-x-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[60px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                <div className='flex flex-col text-[20px] '>
                  <span>Out of Stock</span>
                  <span className='font-bold'>{outOfStock.length}</span>
                </div>
              </div>
              <div className='bg-blue-500 opacity-50 w-[260px] h-[100px] text-white flex items-center justify-center space-x-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[60px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
                <div className='flex flex-col text-[20px] '>
                  <span>All Categories</span>
                  <span className='font-bold'>{categories.size}</span>
                </div>
              </div>
            </div>
            <div className='mt-11'>
              <div className='flex justify-between items-center'>
                <span>Recently added Products</span>
                <Link to={'/dashboard/products'} className='text-[14px]'>See more</Link>
              </div>
              <div className=' mt-4'>
                <div className='border border-gray-200 h-[40px] rounded-b flex text-[13px] items-center px-3'>
                    <p className='mr-[230px]'>Product Name</p>
                    <p className='mr-[100px]'>Category</p>
                    <p className='mr-[80px]'>Price</p>
                    <p className='mr-[80px]'>Quantity</p>
                    <p className='mr-[200px]'>Description</p>
                    <p>Actions</p>
                </div>
                <div className='w-full  '>
                  {loading ? <Loading/> : view}
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage