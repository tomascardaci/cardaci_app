import React from 'react'
import { Card } from 'react-bootstrap'

import './ItemDetail.css'

const ItemDetail = ({product}) => {

  return (
    <Card className='ItemDetailBody'>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title className='CardTitle'>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      {/* <ItemCount initial={1} stock={5} onAdd={onAdd}/> */}
    </Card>
  )
}

export default ItemDetail