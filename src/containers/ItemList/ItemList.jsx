import React from 'react'
import Item from '../../components/Item/Item'

import './ItemList.css'

const ItemList = ({productos}) => {
    
    return(
    <div className='itemListBody'>{
    productos.map(producto => <Item key={producto.id} producto={producto}/>)
    }</div>
    )

}

export default ItemList