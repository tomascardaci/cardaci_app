import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting, children}) => {

  return (
    <div>
        {children}
        <p className='Greeting'>{greeting}</p>
    </div>
  )
}

export default ItemListContainer