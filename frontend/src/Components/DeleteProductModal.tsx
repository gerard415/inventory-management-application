import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { productProps } from '../types';
import axios from 'axios';
import { errorNotification, successfulNotification } from '../notifications';

type DeleteModalProps = {
    product: productProps,
    setProducts: React.Dispatch<React.SetStateAction<productProps[] | undefined>>
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '',
  boxShadow: 24,
  
  borderRadius:'5px',
};

export default function DeleteProductModal({product, setProducts}: DeleteModalProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteProduct = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id:string) => {
        e.preventDefault()
        try {
            await axios.delete(`/products/${id}`)
            successfulNotification('product deleted successfully')
            setProducts(products => products?.filter(product => product._id !== id))
        } catch (error) {
            errorNotification('error occured, Please try again later')
            console.log(error)
        }
  
    }

    return (
        <div>
            <button onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='flex flex-col justify-center space-y-6 px-8 py-6'>
                        <div className='flex items-center justify-center'>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Are you sure you want to delete this item?
                            </Typography>
                        </div>
                        
                        <div className='flex justify-end space-x-3 mr-1'>
                            <button className='w-[120px] h-[32px] rounded-sm border border-black' onClick={handleClose} >
                                Cancel
                            </button>
                            <button className='w-[120px] h-[32px] bg-red-500 rounded-sm' onClick={(e) => deleteProduct(e, product._id)} >
                                Delete
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
