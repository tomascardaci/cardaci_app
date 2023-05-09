import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {

  const [haveQuantity, setHaveQuantity] = useState(false)

  const { addToCart } = useCartContext()

  const onAdd = (cantidad) => {
    addToCart({...product, quantity: cantidad})
    setHaveQuantity(true)
  }

  


  return (
        <Card> 

            <div className='ItemDetailBody'>

              <Card.Img alt='imagen' variant="top" src={product.img} />
              
              <Card.Body>
                <Card.Title><p className="CardTitle">{product.name}</p></Card.Title>
                <Card.Text><p className="CardDescription">{product.description}</p></Card.Text>
              </Card.Body>

              <>
              {haveQuantity ? 

              <div className='ButtonLinksContainer'>
                <Link className='ButtonLink' to='/'>Seguir comprando</Link>
                <Link className='ButtonLink' to='/cart'>Terminar compra</Link>
              </div>

              :
              <ItemCount stock={product.stock} onAdd={onAdd}/>}
              </>
              


            </div>
        
        </Card>
  )
}

export default ItemDetail