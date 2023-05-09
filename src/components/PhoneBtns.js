import React,{useState} from 'react'
import { useGlobalContext } from '../context'
import ListIcon from '@mui/icons-material/List';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from 'react-bootstrap/Modal';
import { List, ListItem } from '@mui/material';

const PhoneBtns = () => {
    const categories = ['pizza','topperstix','wings','sides','desserts']
    const {cartRef,cart,setcategory} = useGlobalContext()
    const [cartCheck, setcartCheck] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = (item) => {
        setShow(false)
        if(item){
            setcategory(item)
        }
    };
    const handleShow = () => setShow(true);
    const toggleCart = ()=> {
        if(!cartCheck){
            cartRef.current.style.transform = 'translateX(-100vw)'
        }else{
            cartRef.current.style.transform = 'translateX(100vw)'
        }
        setcartCheck(!cartCheck)
    }
  return (
    <div className='phone row'>
        <button className='btn' onClick={handleShow}><ListIcon style={{marginTop:'-4.5px'}}/> Menu</button>
        <button className='btn' onClick={toggleCart}><ShoppingCartIcon/> Cart({cart.length})</button>

        <Modal style={{width:'80vw',marginLeft:'10vw'}} show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <List>
                {categories.map(item=>{
                    return <ListItem className='phone-menu-items' onClick={()=>handleClose(item)}>{item.charAt(0).toUpperCase()+item.slice(1)}</ListItem>
                })}
            </List>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default PhoneBtns