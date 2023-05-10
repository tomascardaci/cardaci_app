import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartLi from '../CartLi/CartLi'

import './CartContainer.css'
import { Card } from 'react-bootstrap'
import CartForm from '../CartForm/CartForm'
import Checkout from '../Checkout/Checkout'
import EmptyCart from '../EmptyCart/EmptyCart'

const CartContainer = () => {

    const [id, setId] = useState(null)

    const [formData, setFormData] = useState({
        name:'', phone:'', email:''
    })

    const [goCheckout, setGoCheckout] = useState(false)

    

    const {
        cartList,
        emptyCart,
        totalPrice
    } = useCartContext()

    console.log(cartList)

    const handleSubmit = (event) => {
        event.preventDefault()

        const order={
            buyer: formData,
            items: cartList.map(({id, name, price}) => ({id, name, price})),
            total: totalPrice()
        }

        const db = getFirestore()

        const queryCollection = collection(db, 'orders')

        addDoc(queryCollection, order)
        .then(resp => setId(resp.id))
        .catch(err => console.log(err))
        .finally(()=>{
            emptyCart()
            setGoCheckout(true)
        })

        


    }

    console.log(formData)

    const handleOnChange = (event)=> {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (

        <>                
        {goCheckout ?

            <Checkout orderId={id}/>
            
            :
            
            <>
            {cartList.length === 0 ?

                <EmptyCart/>
            
                :
                <div className="CartContainerBody">
                    <div className='CartLiContainer'>
                        {cartList.map(product => <CartLi key={product.key} product={product} />)}
                    </div>
                    <Card className='CartDetailContainer'>
                        <div className='CartDetailBody'>
                            <div className="CartDetailOptions">
                                <button className='CartDetailButton' onClick={emptyCart}>Vaciar Carrito</button>
                                <button className='CartDetailButton' onClick={handleSubmit}>Comprar</button>
                            </div>
                            <p className='CartDetailPrice'>Precio Total: ${totalPrice()}</p>
                        </div>
                        <CartForm handleOnChange={handleOnChange} formData={formData}/>
                    </Card>
                </div> 
            }</>
           
        }
        </>
  )
}

export default CartContainer