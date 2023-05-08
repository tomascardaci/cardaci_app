import React, { useEffect, useState } from 'react'
import { ProductsMockFetch } from '../../../utils/ProductsMockFetch'
import { useParams } from 'react-router-dom'

import ItemDetail from '../../ItemDetail/ItemDetail'

import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const {pid} = useParams()

    console.log(pid)

    useEffect(()=>{
        ProductsMockFetch(pid)
            .then(resp => setProduct(resp))
            .catch((err) => console.log(err))
    }, [pid])

    console.log(product)
    
  return (
    <div className='ItemDetailContainerBody'>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer