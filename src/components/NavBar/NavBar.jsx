import React, { useEffect } from 'react'

import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';

import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './NavBar.css'
const NavBar = () => {

  useEffect(() => {
    WebFont.load({
      google:{
        families:['Roboto']
      }
    })
  })


  return (
        <Navbar className='NavBar' >
            <Container className='NavBarLinksContainer'>
                    <Nav className="me-auto align-items-center NavBarBody">    
 
                        <Link to='/'>
                            <img src="https://i.ibb.co/M10nbGv/FUSA-logo.png" height={70} alt='fusa-logo' />
                        </Link>

                        
                        <div className="NavBarLinkContainer">
                          <Link to='/' className='NavBarLink font-loader'><p>INICIO</p></Link>
                          <Link to='/category/guitarras' className='NavBarLink'><p>GUITARRAS</p></Link>
                          <Link to='/category/bajos'className='NavBarLink'><p>BAJOS</p></Link>
                          <Link to='/category/baterias'className='NavBarLink'><p>BATERÍAS</p></Link>
                          <Link to='/category/microfonos'className='NavBarLink'><p>MICRÓFONOS</p></Link>
                          <Link to='/category/placas'className='NavBarLink'><p>PLACAS</p></Link>
                        </div>
                        

                        <Link to='/cart'><CartWidget/></Link>
                        
                    </Nav>


            </Container>
        </Navbar>
  )
}

export default NavBar