import React, {useState} from 'react'
import DashboardHeader from '../Components/DashboardHeader'
import ImageUploader from '../Components/ImageUploader'
import { imageProps } from '../types'
import axios from 'axios'
import { categories } from '../data'
import { Link, Navigate } from 'react-router-dom'

const AddProductsPage = () => {
  const [name, setName] = useState<string>('')
  const [category, setCategory] = useState<string>('electronics')
  const [quantity, setQuantity] = useState<number>(1)
  const [price, setPrice] = useState<number>(1)
  const [description, setDescription] = useState<string>('')
  const [addedPhotos, setAddedPhotos] = useState<imageProps[]>([])
  const [redirect, setRedirect] = useState<boolean>(false)
  

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    setCategory(e.target.value)
  }

  const addNewProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await axios.post('/products', {
        name, category, quantity, price, description, images:addedPhotos
      })
      setRedirect(true)
      console.log(name, category, quantity, price, description, addedPhotos)
    } catch (error) {
      console.log(error)
    }
    
  }

  if(redirect) {
    return <Navigate to={'/dashboard/products'} />
  }

  return (
    <div className='bg-gray-100 w-full ml-[290px] min-h-screen' >
      <div className='bg-white sticky top-0 z-10'>
        <DashboardHeader/>
      </div>
      <div className='p-5 flex justify-center items-center min-h-[647px]'>
        <div className='bg-white h-full w-full rounded-md flex flex-col p-5 px-[30px] space-y-3 text-gray-600'>
          <div>
            <span className=''>Add Product</span>
          </div>
          <div>
            <form onSubmit={addNewProduct}>
              <div className='flex justify-between'>
                <div className='border border-gray-300 w-[550px] min-h-[510px] rounded-lg'>
                  <div className='p-5 space-y-5'>
                    <p>Add Images</p>
                    <ImageUploader addedPhotos={addedPhotos} setAddedPhotos={setAddedPhotos} />
                  </div>
                </div>
                <div className='border border-gray-300 w-[550px] min-h-[500px] rounded-lg p-5 space-y-3'>
                  <div className='space-y-1'>
                    <label htmlFor="name">Product Name</label>
                    <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value) } placeholder='Navy Blue Sneakers' className='rounded h-[50px] w-full border border-gray-300 p-3 text-[14px]'/>
                  </div>
                  <div className='space-y-1'>
                    <label htmlFor="category">Category</label>
                    <select id="category" onChange={selectCategory} className='rounded h-[50px] w-full border border-gray-300 p-3 text-[14px]'>
                      {categories.map((category) => (
                        <option key={category.value} value={category.value} className='rounded h-[50px] w-full border border-gray-300 p-3 text-[14px]' >{category.display}</option>
                      ))}
                    </select>
                  </div>
                  <div className='space-y-1'>
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" id='quantity' value={quantity} onChange={(e) => setQuantity(e.target.valueAsNumber)} placeholder='write the quanitity' className='rounded h-[50px] w-full border border-gray-300 p-3 text-[14px]'/>
                  </div>
                  <div className='space-y-1'>
                      <label htmlFor="price">Price</label>
                    <input type="number" id='price' value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} placeholder='price is $' className='rounded h-[50px] w-full border border-gray-300 p-3 text-[14px]'/>
                  </div>
                  <div className='space-y-1'>
                    <label htmlFor="description">Description</label>
                    <input type="text" id='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='write a description' className='rounded h-[100px] w-full border border-gray-300 p-3 text-[14px]'/>
                  </div>
                </div>
              </div>
              <div className='flex justify-end mt-3'>
                <button className=' border  border-black w-[100px]' disabled={!name || !category || !description}  >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductsPage