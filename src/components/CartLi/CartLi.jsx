import React from 'react'
import { useCartContext } from '../../context/CartContext'

import './CartLi.css'
import { Card } from 'react-bootstrap'

const CartLi = ({product}) => {

    const {
        deleteProduct
    } = useCartContext()

  return (
    <Card>
        <li className='CartLi'>
            <img src={product.img} alt='imagen' className='CartLiImg'/>
            <p className='CartLiText'>{product.name}</p>
            <p className='CartLiText'>{product.quantity}</p>
            <button className='btn btn-danger' onClick={() => deleteProduct(product.id)}>X</button>
        </li>
    </Card>
  )
}

export default CartLi