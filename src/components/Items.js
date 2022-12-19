import React from 'react'
import Data from '../data'
import {useGlobalContext} from '../context'
import Item from './Item'


const Items = () => {
  const {drawerWidth,open} = useGlobalContext()
  return (
    <div className="all">
      <h3 className='category-heading'>Pizzas</h3>
      <div className='items row' style={{marginLeft:`${open ? drawerWidth-10: "0"}px`}}>
          {Data.map((item)=>{
              return <div className={!open ? 'col-md-4': 'col-md-6'}>
                <Item item={item}/>
              </div>
          })}
      </div>
    </div>
  )
}

export default Items