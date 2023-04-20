import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { mockFetch } from '../../utils/mockFetch'

import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'
import { Filter } from '../../utils/Filter'

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([])
  const {cid} = useParams()

  useEffect(()=>{
    if (cid) {
      mockFetch()
        .then(resp => setProductos(resp.filter(prod => prod.categoria === cid)))
        .catch(err => console.log(err))
    } else {
      mockFetch()
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
    }
  }, [cid])


  const handleProductsFiltered = ({filterState, handleFilterChange}) => (

    <div>
      <p>Buscar Producto</p>
      <p>{filterState}</p>

      <input type="text" value={filterState} onChange={handleFilterChange} />

      <ItemList
          productos = {
            filterState === '' ? productos : productos.filter(producto => producto.name.toLowerCase().includes(filterState.toLowerCase()))
          } 
      />
    </div>

    
  )

  return (
    <>
      {productos.length !== 0 ?
            <Filter>
              { handleProductsFiltered}
            </Filter>

        :
        
        <h2>Cargando...</h2>
      }

      <div></div>
    </>
    
  )
}

export default ItemListContainer