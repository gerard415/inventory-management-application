import React, {useEffect, useState} from 'react'
import DashboardHeader from '../Components/DashboardHeader'
import { productProps } from '../types'
import Loading from '../Components/Loading'
import { getProducts } from '../data'
import ProductComponent from '../Components/ProductComponent'
import ProductFilters from '../Components/ProductFilters'

const ProductsPage = () => {
    const [products, setProducts] = useState<productProps[]>([])
    const [product, setProduct] = useState<productProps>()
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [sort, setSort] = useState('')
  
    useEffect(() => {
      setLoading(true)
      getProducts(category, price, sort, setProducts)
      setLoading(false)
  
    }, [category, sort, price, product])
  
  
    let view
  
    view =  products.map((product) => (
              <ProductComponent key={product._id} product={product} setProducts={setProducts} setProduct={setProduct}/>
            ))
      
    
  
    return (
        <div className='bg-gray-100 w-full' >
            <div className='bg-white sticky top-0 z-10'>

            </div>
            <div className='p-5 flex justify-center items-center min-h-[647px]'>
                <div className='bg-white min-h-[600px] w-full rounded-md flex flex-col p-5 px-[30px] space-y-3 text-gray-600 justify-between'>
                    <div className=''>
                        <div className='mb-5'>
                            <span className='font-bold text-[17px]'>Products</span>
                        </div>
                        <ProductFilters setCategory={setCategory} setSort={setSort} setPrice={setPrice} />
                    </div>
                    <div className=' mt-4 overflow-x-auto border'>
                        <div className='border min-w-[1000px] space-x-4 border-gray-200 h-[40px] flex text-[13px] items-center px-3'>
                            <p className='w-[22%]'>Product Name</p>
                            <p className='w-[20%]'>Category</p>
                            <p className='w-[10%]'>Price</p>
                            <p className='w-[10%]'>Quantity</p>
                            <p className='w-[30%]'>Description</p>
                            <p className='w-[8%] pl-3'>Actions</p>
                        </div>
                        <div className='w-full  '>
                            {loading ? <Loading/> : view}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
  export default ProductsPage