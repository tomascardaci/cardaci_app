import React, { useEffect } from 'react'

import { Link } from 'react-router-dom';

import WebFont from 'webfontloader';

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
      <Link className='ItemLink' to={`/detail/${product.id}`}>
            <Card className='ItemBodyContainer shadow-md'>
          <div className="Color">
              <Card.Img alt='imagen'  src={product.img} />
              <Card.Body>
                <Card.Title><p className='ItemTitle'>{product.name}</p></Card.Title>
                <Card.Subtitle><p className="ItemSubtitle">$ {product.price}</p></Card.Subtitle>
              </Card.Body>
          </div>
            </Card>
      </Link>
  )
}

export default Item