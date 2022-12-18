import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';



const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Cart = () => {
    const [cart, setcart] = useState([{name:'TOPPERS CLASSIC',size:"Medium",type:"Tallboy"},{name:'TOPPERS CLASSIC',size:"Medium",type:"Tallboy"},{name:'TOPPERS CLASSIC',size:"Medium",type:"Tallboy"}])
  return (
    <div className='cart'>
        <div className="space"></div>
        <p className='h3 fw-bold text-center'>Your Cart</p>            
        <div className='cart-items'>
            {cart.map(item => {
                return 
            })}
        </div>
    </div>
  )
}

export default Cart