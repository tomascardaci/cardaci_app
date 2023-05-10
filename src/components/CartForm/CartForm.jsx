import React from 'react'
import './CartForm.css'

const CartForm = ({handleOnChange, formData}) => {
  return (
    <div className='CartFormContainer'>
        <form className='CartForm' action="">

            <input
                className='CartFormInput' 
                type='text' 
                name='name' 
                placeholder='Ingrese su nombre' 
                onChange={handleOnChange} 
                value={formData.name}
            />

            <input 
                className='CartFormInput'
                type='text' 
                name='phone' 
                placeholder='Ingrese su celular' 
                onChange={handleOnChange} 
                value={formData.phone}
            />

            <input 
                className='CartFormInput'
                type='text' 
                name='email' 
                placeholder='Ingrese su email' 
                onChange={handleOnChange} 
                value={formData.email}
            />

        </form>
    </div>
  )
}

export default CartForm