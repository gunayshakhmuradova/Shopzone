import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartComp = (cart) => {
    const dispatch = useDispatch()
  return (
    <div className='my-10 flex item-center justify-between'>
        <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
        <div className='w-[476px]'>
            <div className='text-xl'>{cart?.title}</div>
            <div>{cart?.description}</div>
        </div>
        <div className='font-bold text-2xl'>{cart?.price} AZN ({cart?.quantity})</div>
        <div className='bg-red-500 text-white w-[150px] 
        h-10 flex item-center justify-center text-2xl courser-pointer rounded-md'>Delete</div>
        <div onClick={() => dispatch(removeFromCart(cart?.id))}></div>
    </div>
  )
}

export default CartComp