import React, { useEffect, useRef, useState } from 'react'
import { productProps } from '../types'
import axios from 'axios'
import { usePopper } from 'react-popper';
import Menu from './Menu';
import EditProductModal from './EditProductModal';
import MenuPopup from './Menu';
import DeleteProductModal from './DeleteProductModal';
import ViewProductModal from './ViewProductModal';

type ProductComponentProps = {
    product :productProps,
    setProducts: React.Dispatch<React.SetStateAction<productProps[] | undefined>>,
    setProduct: React.Dispatch<React.SetStateAction<productProps | undefined>>
}

const ProductComponent = ({product, setProducts, setProduct}: ProductComponentProps) => { 
    return (
        <div key={product._id} className='border min-w-[1000px] border-gray-200 h-[40px] space-x-4 flex text-[13px] items-center px-3'>
            <div className='w-[22%] overflow-x-none  space-x-4 flex'>
                <div>
                    {product.images.length > 0 ? <div><img className='h-[30px] w-[30px]'  src={product.images[0].filePath } alt="" /></div> : <div className='bg-gray-300 h-[30px] w-[30px]'></div> }
                </div>
                <p>
                    {product.name.length<30 ? product.name : (product.name.slice(0, 30) + '...')}
                </p> 
            </div>
            <p className='w-[20%] overflow-x-none '>
                {product.category.length<30 ? product.category : (product.category.slice(0, 30) + '...')}
            </p>
            <p className='w-[10%] overflow-auto '>
                {product.price}
            </p>
            <p className='w-[10%] overflow-auto '>
                {product.quantity}
            </p>
            <p className='w-[30%] overflow-x-none '>
                {product.description.length< 30 ? product.description : (product.description.slice(0, 30) + '...')}
            </p>
            <div className='w-[8%] flex space-x-1 ' >
                <ViewProductModal product={product}/>
                <EditProductModal product={product} setProduct={setProduct} />
                <DeleteProductModal product={product} setProducts={setProducts} />
            </div>
        </div>
    )
}

export default ProductComponent