import React,{useEffect, useState} from 'react'
import Data from '../data'
import {useGlobalContext} from '../context'
import Item from './Item'


const Items = () => {
  const {drawerWidth,open,category} = useGlobalContext()  
  const [items, setitems] = useState([])

  useEffect(()=> {
    const newItems = Data.filter((item)=>{
      return item.category === category
    })
    setitems(newItems)
  },[category])

  return (
    <div className="all">
      <h3 className='category-heading mb-3'>{category}</h3>
      <div className='items row'> 
      {/* //style={{marginLeft:`${open ? drawerWidth-10: "0"}px`}}> */}
          {items.map((item)=>{
              return <div className='col-md-4'>
                 {/* //className={!open ? 'col-md-4': 'col-md-6'}> */}
                <Item item={item}/>
              </div>
          })}
      </div>
    </div>
  )
}

export default Items