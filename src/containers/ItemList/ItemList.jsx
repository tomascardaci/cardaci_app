import React from 'react'
import Item from '../../components/Item/Item'

import './ItemList.css'

const ItemList = ({productos}) => {
    
    return(

    productos.map(producto => <Item key={producto.id} producto={producto}/>)

    )

}

export default ItemList