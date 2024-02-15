import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ImageUploader from './ImageUploader';
import { ImageProps } from 'antd';
import { imageProps, productProps } from '../types';
import ModalImageUploader from './ModalImageUploader';
import ModalForm from './ModalForm';
import axios from 'axios';
import { errorNotification, successfulNotification } from '../notifications';

type EditModalProps = {
  product: productProps,
  setProduct: React.Dispatch<React.SetStateAction<productProps | undefined>>
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '',
  boxShadow: 24,
  p: 4,
  borderRadius:'10px',
  height:'520px'
};

export default function EditProductModal({product, setProduct}: EditModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState<string>(product.name)
  const [category, setCategory] = useState<string>(product.category)
  const [quantity, setQuantity] = useState<number>(product.quantity)
  const [price, setPrice] = useState<number>(product.price)
  const [description, setDescription] = useState<string>(product.description)
  const [addedPhotos, setAddedPhotos] = useState<imageProps[]>(product.images)

  const editProduct = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id:string) => {
    e.preventDefault()
    try {
      await axios.patch(`/products/${id}`, {
        name, category, quantity, price, description, images:addedPhotos
      })
      successfulNotification('product edited successfully')
      handleClose()
      setProduct(product)
    } catch (error) {
      errorNotification('error occured, Please try again later')
      console.log(error)
    }
  }

  const resetState = () => {
    setName(product.name)
    setCategory(product.category)
    setQuantity(product.quantity)
    setPrice(product.price)
    setDescription(product.description)
    setAddedPhotos(product.images)
  }

  const closeModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    handleClose()
    resetState()
  }

  return (
    <div>
      <button onClick={handleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className='flex flex-col justify-between min-h-[430px] space-y-5'>
            <div className='flex justify-end'>
              <button onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className='flex space-x-6'>
              <div className='border border-gray-300 h-[370px] w-full'>
                <ModalImageUploader addedPhotos={addedPhotos} setAddedPhotos={setAddedPhotos} />
              </div>
              <div className='border border-gray-300 min-h-[370px] w-full'>
                <ModalForm 
                  name={name} 
                  category={category} 
                  quantity={quantity} 
                  price={price} 
                  description={description} 
                  setName={setName}
                  setCategory={setCategory}
                  setQuantity={setQuantity}
                  setPrice={setPrice}
                  setDescription={setDescription}
                />
              </div>
            </div>
            <div className='flex justify-end space-x-3'>
              <button className='w-[120px] h-[32px] rounded-sm bg-red-500' onClick={(e) => closeModal(e)} >
                Cancel
              </button>
              <button className='w-[120px] h-[32px] rounded-sm border border-black disabled:border-gray-300 disabled:text-gray-400 ' 
                onClick={(e) => editProduct(e, product._id)}
                disabled={
                  name === product.name 
                  && category === product.category 
                  && quantity === product.quantity 
                  && price === product.price 
                  && description === product.description
                  && addedPhotos.length === product.images.length
                  && JSON.stringify(addedPhotos) === JSON.stringify(product.images)
                }
              >
                Save Changes
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
