import React, { useEffect, useState } from 'react'
import { mockFetch } from '../../utils/mockFetch'
import { useParams } from 'react-router-dom'

import './ItemDetailContainer.css'
import ItemDetail from '../../components/ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  const {pid} = useParams()

  useEffect(()=>{
    mockFetch(pid)
    .then(resp => setProduct(resp))
    .catch((err)=> console.log(err))
  }, [])

  return (
    <div className='itemDetailContainer'>
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer