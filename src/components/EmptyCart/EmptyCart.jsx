import React from 'react'
import './EmptyCart.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const EmptyCart = () => {
  return (
    <Card className='EmptyCart'>

            <Card.Title className='EmptyCartTitle'>No hay productos</Card.Title>
            <Link to='/'><button className='CheckoutButton'>Volver al inicio</button></Link>

        </Card>
  )
}

export default EmptyCart