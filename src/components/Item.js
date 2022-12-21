import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useGlobalContext } from '../context';

const Item = ({item}) => {
  const {addToCart} = useGlobalContext()
  const [pizzaSize, setpizzaSize] = useState('Medium')
  const [pizzaType, setpizzaType] = useState('Thin')
  return (
    <div>
        <Card className='item '  key={item.id}>
              <CardMedia
                
                component="img"
                height="140"
                image={item.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='item-name'>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description.slice(0,100)}
                </Typography>
                <div className="selects">
                    <select name="size" id="" className='form-select me-1' onChange={(e)=>setpizzaSize(e.target.value)}>
                        <option value="Small">Small</option>
                        <option value="Medium" selected>Medium</option>
                        <option value="Large">Large</option>
                    </select>
                    <select name="type" id="" className='form-select ms-1' onChange={(e)=>setpizzaType(e.target.value)}>
                        <option value="Thin" selected>Thin</option>
                        <option value="Hand Tossed">Hand Tossed</option>
                        <option value="Tallboy">Tallboy</option>
                    </select>
                </div>
                <div className='mt-2'>
                  <button className='btn me-1' style={{border:'2px solid #e9edc9'}}>Customize</button>
                  <button className='btn ms-1' style={{backgroundColor:'#e9edc9'}} onClick={()=>addToCart(item.name,pizzaSize,pizzaType)}>Add To Cart</button>
                </div>
              </CardContent>
          </Card>
    </div>
  )
}

export default Item