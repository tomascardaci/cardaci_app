import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { mockFetch } from '../../utils/mockFetch'

import ItemList from '../ItemList/ItemList'

import './ItemListContainer.css'

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([])

  const {cid} = useParams()

  console.log(cid)


  useEffect(()=>{

    if(cid) {
      mockFetch()
      .then(resp => setProductos(resp.filter(prod=>prod.categoria === cid)))
      .catch((err)=> console.log(err))
      .finally(() => console.log("completo"))

    }else{
      mockFetch()
      .then(resp => setProductos(resp))
      .catch(err => console.log(err))
      .finally(() => console.log("completo"))
    }
    
    
  }, [cid])


  console.log(productos)
  return (
    <>
            
            <ItemList productos = {productos}/>

        


            
    </>

    

  )
}

export default ItemListContainer