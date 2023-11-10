import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
         <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={'/'} style={{textDecoration:'none',color:'',fontSize:'30px'}}>
            <i class="fa-solid fa-video fa-beat me-3 text-warning"></i>{''}
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header