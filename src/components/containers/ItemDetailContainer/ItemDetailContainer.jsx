import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../../ItemDetail/ItemDetail'

import './ItemDetailContainer.css'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Loading from '../../Loading/Loading'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const {pid} = useParams()

    useEffect(()=>{
      const dbFirestore = getFirestore()
      const queryDocument = doc(dbFirestore, 'products', pid)
      getDoc(queryDocument)
      .then(resp => setProduct({id: resp.id, ...resp.data()}))
      .catch(error => console.log(error))
      .finally(()=> setIsLoading(false)) 
    }, [pid])
    
  return (
    <div className='ItemDetailContainerBody'>
        <>
          {isLoading ? <Loading/> : <ItemDetail product={product}/>}
        </>    
    </div>
  )
}

export default ItemDetailContainer