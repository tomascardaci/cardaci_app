import React from 'react'
import { useCount } from '../../hooks/useCount'
import './ItemCount.css'

const ItemCount = ({initial=1, stock=5, min=1, onAdd}) => {

  const { contador, increment, decrement, reset} = useCount(1, 5, 1)

  function handleOnAdd () {
    onAdd(contador)
  }

  return (
    <div className='ItemCount'>
      <p className='Cantidad'>Cantidad: {contador}</p>
      <button className='btn btn-dark' onClick={increment}>+</button>
      <button className='btn btn-dark' onClick={decrement}>-</button>
      <button className='btn btn-success' variant="success" size='lg' onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount