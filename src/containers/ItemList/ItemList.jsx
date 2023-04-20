import React from 'react'
import { useState, useEffect } from 'react'
import { mockFetch } from '../../utils/mockFetch'
import Item from '../../components/Item/Item'

import './ItemList.css'

const ItemList = () => {
    const [productos, setProductos] = useState([])

    useEffect(()=>{
        mockFetch()
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
    }, []);
  
    
   
    return(
    <div className='itemListBody'>{
        productos.length !== 0 ? 

        productos.map(producto => <Item key={producto.id} producto={producto}/>)
        : 
        <h2>Cargando...</h2>
        
    }</div>
  )
}

export default ItemList