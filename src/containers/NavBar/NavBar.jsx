import React from 'react'
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../../components/CartWidget/CartWidget'

import './NavBar.css'


const NavBar = () => {
  return (
      <Navbar className='NavBar' bg="dark" variant="dark" expand="lg">
        <Container className='LinkContainer'>
          <Link className='Brand' to='/'>BRAND</Link>
          <Nav className="me-auto">
            <Link className='Link' to='/'>Inicio</Link>
            <Link className='Link' to='/categoria/escritorios'>Escritorios</Link>
            <Link className='Link' to='/categoria/vestidores'>Vestidores</Link>
            <Link className='Link' to='/cart'><CartWidget/></Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar