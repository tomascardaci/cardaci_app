import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {

  let onAdd = (cantidad) => {
    console.log(cantidad)
  }

  return (
    <Card className='itemDetailBody'>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title className='CardTitle'>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
      </Card.Body>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </Card>
  )
}

export default ItemDetail
