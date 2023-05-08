import React, { useEffect } from 'react'

import { Link } from 'react-router-dom';

import WebFont from 'webfontloader';

import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import './Item.css'

const Item = ({product}) => {

  useEffect(() => {
    WebFont.load({
      google:{
        families:['Roboto']
      }
    })
  })

  return (
      <Card className='ItemBodyContainer'>
          <Card.Img src={product.img} />
              <Card.Body className='RobotoFont'>
                  <Card.Title><p className='ItemTitle'>{product.name}</p></Card.Title>
                  <Link to={ `/detail/${product.id}`}><Button size='md' className='ItemButton' >Detalles</Button></Link>
        </Card.Body>
      </Card>
  )
}

export default Item