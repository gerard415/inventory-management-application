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

type EditModalProps = {
  product: productProps,
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

export default function ViewProductModal({product}: EditModalProps) {
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
              <div className='flex flex-col justify-between min-h-[430px] space-y-5'>
                  <div className='flex justify-end'>
                  <button onClick={handleClose}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
                  </div>
                  <div className='flex space-x-6 justify-center'>
                    <div className='border flex flex-col border-gray-300 min-h-[300px] w-[400px] space-y-0'>
                        { addedPhotos.length > 0 ? <div><img className='h-[200px] w-full border'  src={product.images[0].filePath } alt="" /></div> : <div className='bg-gray-300 h-[30px] w-full'></div>}
                        <div className='flex'>
                          {addedPhotos.length>1 && <img className='h-[148px] w-[33.3%] border'  src={product.images[1].filePath } alt="" />}
                          {addedPhotos.length>2 && <img className='h-full w-[33.3%] border'  src={product.images[2].filePath } alt="" />}
                          {addedPhotos.length>3 && <img className='h-full w-[33.3%] border'  src={product.images[3].filePath } alt="" />}
                        </div>
                    </div>
                    <div className='border border-gray-300 min-h-[300px] w-[400px]'>
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
                      Close
                  </button>
                  <button className='w-[120px] h-[32px] rounded-sm border border-black disabled:border-gray-300 disabled:text-gray-400 ' 
                      onClick={(e) => editProduct(e, product._id)}
                  >
                      Edit product
                  </button>
                  </div>
              </div>
            </Box>
        </Modal>
    </div>
  );
}
