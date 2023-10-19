import axios from "axios"
import { productProps } from "./types"

export const categories = [ 
    {
        value: 'electronics',
        display: 'Electronics'
    },
    {
        value: 'stationery',
        display: 'Stationery'
    },
    {
        value: 'cosmestics and personal hygiene',
        display: 'Cosmestics and personal hygiene'
    },
    {
        value: 'household',
        display: 'Household'
    },
    {
        value: 'textiles',
        display: 'Textiles'
    },
    {
        value: 'medical',
        display: 'Medical'
    },
    {
        value: 'vehicle',
        display: 'Vehicle'
    },
    {
        value: 'canned food',
        display: 'Canned food'
    },
    {
        value: 'glass',
        display: 'Glass'
    }
]

export const getProducts = async (category:string, sort:string, price:string, setProducts:React.Dispatch<React.SetStateAction<productProps[]>>) => {
    let products: productProps[]
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