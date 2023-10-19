import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { productProps } from '../types';
import EditModal from './EditProductModal';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom'

export default function MenuPopup() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='space-x-3'>
      <Button className='h-6 bg-black text-[20px] border border-black' aria-describedby={id} onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
      >
        <div className='flex flex-col items-center justify-center'>
            <div>
              <Link to={'/register'}><button className=' w-[100px] h-[35px] hover:bg-gray-300 hover:opacity-50 hover:text-gray-900'>Register</button></Link>
            </div>
            <div>
              <Link to={'/login'}><button className=' w-[100px] h-[35px] hover:bg-gray-300 hover:opacity-50 hover:text-gray-900'>Login</button></Link>
            </div>
        </div>
      </Popover>
    </div>
  );
}