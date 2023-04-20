import React from 'react'
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './Item.css'


const Item = ({producto}) => {
  return (
    <div className='itemBody'>
      <Card>
        <Card.Img alt='.' className='fluid productImg' variant='top' src={producto.image}/>
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>{producto.description}</Card.Text>
          <Link to={ `/detail/${producto.id}`}><Button variant='dark' size='md'>Detalles</Button></Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item