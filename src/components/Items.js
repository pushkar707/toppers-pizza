import React from 'react'
import Data from '../data'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useGlobalContext} from '../context'

const Items = () => {
  const {drawerWidth,open} = useGlobalContext()
  return (
    <div className='items row' style={{marginLeft:`${open ? drawerWidth-10: "0"}px`}}>
        {Data.map((item)=>{
            return <div className={!open ? 'col-md-4': 'col-md-6'}>
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
                    <select name="size" id="" className='form-select me-1'>
                        <option value="">Small</option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                    </select>
                    <select name="type" id="" className='form-select ms-1'>
                        <option value="">Thin</option>
                        <option value="">Hand Tossed</option>
                        <option value="">Tallboy</option>
                    </select>
                </div>
                <div className='mt-2'>
                  <button className='btn me-1' style={{border:'2px solid #e9edc9'}}>Customize</button>
                  <button className='btn ms-1' style={{backgroundColor:'#e9edc9'}}>Add To Cart</button>
                </div>
              </CardContent>
          </Card>
            </div>
        })}
    </div>
  )
}

export default Items