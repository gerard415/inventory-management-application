import React, { useState } from 'react'
import { categories } from '../data'

type ModalFormProps = {
    name: string,
    category: string,
    quantity: number,
    price: number,
    description: string
    setName: React.Dispatch<React.SetStateAction<string>>
    setCategory: React.Dispatch<React.SetStateAction<string>>
    setQuantity: React.Dispatch<React.SetStateAction<number>>,
    setPrice: React.Dispatch<React.SetStateAction<number>>,
    setDescription:React.Dispatch<React.SetStateAction<string>>
}

const ModalForm = ({name, category, quantity, price, description, setCategory, setName, setQuantity, setPrice, setDescription}: ModalFormProps) => {

    const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setCategory(e.target.value)
    }
  
    return (
        <div className='flex rounded-lg py-2 px-3 space-y-2 flex-col'>
            <div className='space-y-1'>
                <label className='text-[14px]' htmlFor="name">Product Name</label>
                <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value) } placeholder='Navy Blue Sneakers' className='rounded h-[32px] w-full border border-gray-300 p-3 text-[14px]'/>
            </div>
            <div className='space-y-1'>
                <label className='text-[14px]' htmlFor="category">Category</label>
                <select id="category" value={category} onChange={(e) => selectCategory(e)} className='rounded h-[32px] w-full border border-gray-300 py-0 text-[14px]'>
                    {categories.map((singleCategory) => (
                    <option key={singleCategory.value} value={singleCategory.value} className='rounded h-[32px] w-full border border-gray-300 text-[14px]' >{singleCategory.display}</option>
                    ))}
                </select>
            </div>
            <div className='flex space-x-5'>
                <div className='space-y-1'>
                    <label className='text-[14px]' htmlFor="quantity">Quantity</label>
                    <input type="number" id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.valueAsNumber)} placeholder='write the quanitity' className='rounded h-[32px] w-full border border-gray-300 p-3 text-[14px]'/>
                </div>
                <div className='space-y-1'>
                    <label className='text-[14px]' htmlFor="price">Price</label>
                    <input type="number" id='price' value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} placeholder='price is $' className='rounded h-[32px] w-full border border-gray-300 p-3 text-[14px]'/>
                </div>
            </div>
            
            <div className='space-y-1'>
                <label className='text-[14px]' htmlFor="description">Description</label>
                <input type="text" id='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='write a description' className='rounded h-[100px] w-full border border-gray-300 p-3 text-[14px]'/>
            </div>
        </div>
    )
}

export default ModalForm