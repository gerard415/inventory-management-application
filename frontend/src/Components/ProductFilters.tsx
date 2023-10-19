import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data'

type ProductFiltersProps = {
    setCategory: React.Dispatch<React.SetStateAction<string>>,
    setSort: React.Dispatch<React.SetStateAction<string>>,
    setPrice: React.Dispatch<React.SetStateAction<string>>
}

const ProductFilters = ({setCategory, setSort, setPrice}: ProductFiltersProps) => {
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
    return (
        <div className='flex justify-between'>
            <div className=' grid grid-cols-2 gap-4 sm:grid-cols-3 '>
                <select onChange={(e) => handleCategoryChange(e)} className='h-[35px] text-[15px] sm:w-[120px] space-x-2 border border-gray-300 rounded p-1 pl-4 flex items-center text-gray-500' name="" id="">
                    <option value="" className='border border-black '>category</option>
                    {categories.map(({value, display}) => (
                        <option key={value} value={value}>{display}</option>
                    ))}
                </select>
                <select onChange={(e) => handlePriceChange(e)} className='h-[35px] sm:w-[120px] space-x-2 border border-gray-300 rounded p-1 pl-4 flex items-center text-gray-500' name="" id="">
                    <option value="" className='border border-black'>price</option>
                    <option value={'100'} className='border border-black'>Below 100$</option>
                    <option value={'1000'} className='border border-black p-10'>Below 1000$</option>
                    <option value={'1001'} className='border border-black'>Above 1000$</option>
                </select>
                <select onChange={(e) => handleSort(e)} className='h-[35px] sm:w-[120px] space-x-2 border border-gray-300 rounded p-1 pl-4 flex items-center text-gray-500' name="" id="">
                    <option value="" className='border border-black'>sort by</option>
                    <option value="ascending" className='border border-black'>Ascending</option>
                    <option value="descending" className='border border-black p-10'>Descending</option>
                    <option value="date" className='border border-black'>Date created</option>
                </select>
                <Link to={'/dashboard/addproducts'} className=' sm:hidden bg-blue-400 h-[35px] sm:w-[100px] flex items-center justify-center rounded text-gray-100 text-center p-1 text-[12px] phone:text-[15px]'>
                    Add Product
                </Link>
            </div>
            <Link to={'/dashboard/addproducts'} className='hidden  bg-blue-400 h-[35px] w-[120px] sm:flex items-center justify-center rounded text-gray-100 text-center p-1 text-[15px]'>
                    Add Product
            </Link>
        </div>
    )
}

export default ProductFilters