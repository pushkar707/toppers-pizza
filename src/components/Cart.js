import React,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';


const Cart = () => {
    const [cart, setcart] = useState([{name:'TOPPERS CLASSIC',size:"Medium",type:"Tallboy"},{name:'TOPPERS CLASSIC',size:"Medium",type:"Tallboy"},{name:'TOPPERS CLASSIC',size:"Medium",type:"Tallboy"}])
  return (
    <div className='cart'>
        <p className='cart-heading h3 fw-bold text-center'>Your Cart</p>            
        <div className='cart-items'>
            {cart.map(item => {
                return <div className='item'>
                    <div className='item-des'>
                        <p className="name">{item.name}</p>
                        <p className="details">{item.size} | {item.type}</p>
                    </div>
                    <div className='clear'>
                        &#8377;600 &nbsp; <CloseIcon/>
                    </div>
                </div>
            })}
        </div>
        <button className='btn btn-success mx-3 me-4 mt-2'>Checkout</button>
    </div>
  )
}

export default Cart