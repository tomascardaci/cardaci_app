import React, { useEffect, useState } from 'react'

import { ProductsMockFetch } from '../../../utils/ProductsMockFetch'
import { useParams } from 'react-router-dom'

import ItemList from '../../ItemList/ItemList'

import './ItemListContainer.css'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const {cid} = useParams()

  console.log(cid)

  useEffect(()=>{

    if(cid) {
      ProductsMockFetch()
        .then(resp => setProducts(resp.filter(prod => prod.category === cid)))
        .catch(err => console.log(err))
        .finally(() => console.log('finally')) 

    }else{
      ProductsMockFetch()
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => console.log('finally else'))
    }


  }, [cid])

  // console.log(products)
  
  return (
    <div>
      <ItemList products = {products}/>
    </div>
  )
}

export default ItemListContainer