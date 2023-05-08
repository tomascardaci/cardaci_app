import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

import './ItemDetail.css'
import AddItemButton from '../AddItemButton/AddItemButton'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'

const ItemDetail = ({product}) => {

  const [haveQuantity, setHaveQuantity] = useState(false)

  const { addToCart } = useCartContext()

  const onAdd = (cantidad) => {
    addToCart({...product, quantity: cantidad})
    setHaveQuantity(true)
  }


  return (
        <Card>
          <div className="ItemDetailBodyContainer">    

            <div className='ItemDetailBody'>

              <Card.Img alt='imagen' variant="top" src={product.img} />
              
              <Card.Body>
                <Card.Title><p className="CardTitle">{product.name}</p></Card.Title>
                <Card.Text><p className="CardDescription">{product.description}</p></Card.Text>
              </Card.Body>

            </div>

            <div className='ItemDetailControls'>

              <Card.Body className='DetailControlsBody'>
                <AddItemButton/>
                <ItemCount stock={product.stock}/>
              </Card.Body>

            </div>

          </div>
        
        </Card>
  )
}

export default ItemDetail