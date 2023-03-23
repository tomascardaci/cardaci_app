import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


const NavBar = () => {
    return(
        <div className='NavBar'>
            <ul className='List'>
                <li className='ItemList'>Inicio</li>
                <li className='ItemList'>Catálogo</li>
                <li className='ItemList'>Contacto</li>
                <li className='ItemList'>Perfil</li>
                <CartWidget/>
            </ul>
        </div>
    )
}

export default NavBar;