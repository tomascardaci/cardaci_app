import React from 'react'

import './ItemCount.css'
import { useCount } from '../../hooks/useCount'

const ItemCount = ({stock}) => {

    const { count, increment, decrement, reset} = useCount(1, stock, 1)

  return (
    <div className='ItemCount'>
        <button className='ItemCountButton'>-</button>
        <p className='ItemCountQuantity'>0</p>
        <button className='ItemCountButton'>+</button>
    </div>
  )
}

export default ItemCount