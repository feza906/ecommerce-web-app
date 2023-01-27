import React from 'react'
import { useGlobal } from './ProductContext'

export const TopProducts = () => {
    const featureProduct = useGlobal();
    console.log(featureProduct);
  return (
    <div className='grid  mx-4 mt-4  md:grid-flow-col justify-center md:space-x-9 mb-8'>
    {featureProduct.map((product)=> {
        return (
        <div>
            <img src={`${product.image}`} className="h-40 rounded-xl shadow-xl my-2 cursor-pointer"/>
            <h1 className='text-center uppercase'>{product.name}</h1>
        </div>)
    })}
    </div>
    )
}
