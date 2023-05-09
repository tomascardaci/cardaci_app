import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import ItemList from '../../ItemList/ItemList'

import './ItemListContainer.css'
import Loading from '../../Loading/Loading'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const {cid} = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'products')
    const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection
  
      getDocs(queryFilter)
      .then(resp => setProducts(resp.docs.map(product => ({id: product.id, ...product.data()}))))
      .catch(err => console.log(err))
      .finally(()=> setIsLoading(false))
  
  }, [cid])

  
  return (
    <div className='ItemListContainer'>
        <>
        {isLoading ? <Loading/> : <ItemList products = {products}/>}
        </>
    </div>
  )
}

export default ItemListContainer