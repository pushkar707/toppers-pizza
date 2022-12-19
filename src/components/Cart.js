import React,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useGlobalContext } from '../context';


const Cart = () => {
    const {cart,removeFromCart,cartRef} = useGlobalContext()
    let total = 0
    cart.forEach(item => {
        total+=5.99
    });
    
  return (
    <div className='cart' ref={cartRef}>
        <p className='cart-heading h3 fw-bold text-center'>Your Cart</p>            
        <div className='cart-items'>
            {cart.map(item => {
                return <div className='item'>
                    <div className='item-des'>
                        <p className="name">{item.name}</p>
                        <p className="details">Medium | TallBoy</p>
                    </div>
                    <div className='clear'>
                        $5.99 &nbsp; 
                        <span onClick={()=>{removeFromCart(item)}}>
                        <CloseIcon/>
                        </span>
                    </div>
                </div>
            })}
        </div>
        <span className='total ms-auto mb-1 mt-auto'>Total: ${total}</span>
        <button className='btn btn-success ms-3 mb-1 me-4' disabled={!total && true}>Checkout</button>
    </div>
  )
}

export default Cart