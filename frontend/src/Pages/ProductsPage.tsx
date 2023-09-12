import React, {useEffect, useState} from 'react'
import DashboardHeader from '../Components/DashboardHeader'
import {Link} from 'react-router-dom'
import { productProps } from '../types'
import axios from 'axios'
import Loading from '../Components/Loading'
import { categories } from '../data'

const ProductsPage = () => {
  const [products, setProducts] = useState<productProps>([])
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    setLoading(true)
    getProducts()
    setLoading(false)

  }, [category, sort, price])

  const getProducts = async () => {
    let products: productProps
    const {data} = await axios.get('/products')
    products = data.products

    if(category){
      products = products.filter(product => product.category === category)
    }

    if(sort){
      if(sort === 'ascending') products = products.sort((a, b) => (a.name.localeCompare(b.name)))

      if(sort === 'descending') products = products.sort((a, b) => (a.name.localeCompare(b.name))).reverse()

      if(sort === 'date') products = products.sort((a, b) => (a.createdAt.localeCompare(b.createdAt)))
    }

    if(price){
      if(price === '100')  products = products.filter(product => product.price < 100)

      if(price === '1000') products = products.filter(product => product.price < 1000)

      if(price === '1001') products = products.filter(product => product.price > 1000)
    }

    setProducts(products)
  }


  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setCategory(e.target.value)
  }

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setSort(e.target.value)
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setPrice(e.target.value)
  }

  let view

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
            <div className=''>
              <div className='mb-5'>
                <span>Products</span>
              </div>
              <div className='flex justify-between'>
                <div className='flex space-x-4'>
                  <select onChange={(e) => handleCategoryChange(e)} className='h-[35px] w-[100px] space-x-2 border border-gray-300 rounded p-1 flex items-center text-gray-500' name="" id="">
                    <option value="" className='border border-black'>Category</option>
                    {categories.map(({value, display}) => (
                      <option key={value} value={value}>{display}</option>
                    ))}
                  </select>
                  <select onChange={(e) => handlePriceChange(e)} className='h-[35px] w-[100px] space-x-2 border border-gray-300 rounded p-1 flex items-center text-gray-500' name="" id="">
                    <option value="" className='border border-black'>Price</option>
                    <option value={'100'} className='border border-black'>Below 100$</option>
                    <option value={'1000'} className='border border-black p-10'>Below 1000$</option>
                    <option value={'1001'} className='border border-black'>Above 1000$</option>
                  </select>
                  <select onChange={(e) => handleSort(e)} className='h-[35px] w-[100px] space-x-2 border border-gray-300 rounded p-1 flex items-center text-gray-500' name="" id="">
                    <option value="" className='border border-black'>Sort by</option>
                    <option value="ascending" className='border border-black'>Ascending</option>
                    <option value="descending" className='border border-black p-10'>Descending</option>
                    <option value="date" className='border border-black'>Date created</option>
                  </select>
                </div>
                <Link to={'/dashboard/addproducts'} className=' bg-blue-400 h-[35px] w-[120px] rounded text-gray-100 text-center p-1 text-[15px]'>
                  Add Product
                </Link>
              </div>
            </div>
            <div className=' h-[460px]'>
                <div className='border border-gray-200 h-[40px] rounded-b flex text-[13px] items-center px-3'>
                    <p className='mr-[230px]'>Product Name</p>
                    <p className='mr-[100px]'>Category</p>
                    <p className='mr-[80px]'>Price</p>
                    <p className='mr-[80px]'>Quantity</p>
                    <p className='mr-[200px]'>Description</p>
                    <p>Actions</p>
                </div>
                <div className='w-full h-[415px] overflow-hidden overflow-y-scroll '>
                  {loading ? <Loading/> : view}
                </div>
            </div>
            {/* <div className='flex justify-between'>
              <div className='border border-black h-[35px] w-[100px]'>
                <button onClick={() => console.log([products])}>click</button>
              </div>
              <div className='border border-black h-[35px] w-[200px]' >

              </div>
            </div> */}
          </div>
        </div>
    </div>
  )
}

export default ProductsPage