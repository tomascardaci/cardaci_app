import React from 'react'

import './ItemCount.css'
import { useCount } from '../../hooks/useCount'
import { HiShoppingCart } from 'react-icons/hi'

const ItemCount = ({stock, onAdd}) => {

  const { count, increment, decrement} = useCount(1, stock, 1)

  function handleOnAdd(){
    onAdd(count)
  }

  return (
    <div className='ItemCountContainer'>
        <div className='ItemCount'>
          <button className='ItemCountButton ' onClick={decrement}>-</button>
          <p className='ItemCountQuantity'>{count}</p>
          <button className='ItemCountButton' onClick={increment}>+</button>
        </div>
        <button className='AddItemButton' onClick={handleOnAdd}><HiShoppingCart size={45}/> +</button>
    </div>
  )
}

export default ItemCount