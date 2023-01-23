import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineHome,AiOutlineShopping} from 'react-icons/ai'

export const Header = () => {
  return (
    <div className='mt-2 border-b-2 pb-2'>
        <ul className='flex space-x-10 font-semibold text-xl justify-center'>
            <Link to='/' className='flex items-center space-x-2 hover:text-gray-400 transform ease-in-out duration-500'><AiOutlineHome/><li>Home</li></Link>
           <Link to='shop' className='flex items-center space-x-2 hover:text-gray-400 transform ease-in-out duration-500'><AiOutlineShopping/><li>Shop</li></Link>
        </ul>
        
    </div>
  )
}
