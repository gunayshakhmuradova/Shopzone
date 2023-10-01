import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlBasket} from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {getCartTotal} from '../../../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

export const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { itemCount } = useSelector((state) => state.carts);
  


  useEffect(() => {
    dispatch(getCartTotal())
  },[dispatch]);

  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input className='bg-gray-200 outline-none' type="text" placeholder='Search' />
        <BiSearch size = {28}/>
      </div>
      <AiOutlineHeart size = {28} />
      <div onClick={() => navigate('cart')}className='relative'>
        <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
        <SlBasket size = {28} />
      </div>
    </div>
  )
}

export default NavbarRight