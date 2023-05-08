import React from 'react';
import { HiShoppingCart } from 'react-icons/hi';

import './CartWidget.css'


const CartWidget = () => {
    return (
        <div>
            <HiShoppingCart className='CartWidget' size={35}/>
        </div>
        
    )
}

export default CartWidget