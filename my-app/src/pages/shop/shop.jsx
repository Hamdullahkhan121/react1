import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './product'

export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>CoZyLiT Style </h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((products)=><Product data={products}/>)}
        </div>
    </div>
  )
}


