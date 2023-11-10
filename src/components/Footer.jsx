import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


function Footer() {
  return(
    <div className='d-flex justify-content-center align-items-center w-100 flex-column'>
      <div className='footer d-flex align-items-center justify-content-evenly w-100'>
        <div className="websites" style={{width:'400px'}}>
          <h4 className='mb-3'><i class="fa-solid fa-video  me-3 text-warning"></i>{''}
            Media Player</h4>
            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, eaque. Quis eveniet nobis laboriosam distinctio beatae obcaecati veritatis? Est, expedita. </h6>  <h6>In dolorem expedita dicta odio repudiandae dolores blanditiis numquam facilis!</h6>

        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-3'>Links</h4>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
          <Link to={'/watch-history'} style={{ textDecoration: 'none', color: 'white' }}>Watch History</Link>
        </div>

        <div className="guides d-flex flex-column">
        <h4 className='mb-3'>Guides</h4>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}>Bootswatch</Link>
        </div>

        <div className="contacts">
          <h4 className='mb-3'>Contact Us</h4>
          <div className="d-flex mb-3">
            <input type="text" className='form-control' placeholder='Enter your email ID' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center '> 
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'https://bootswatch.com/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
          </div>
        </div>
      </div>
      <p className='mt-5'>Copyright © 2023 Media player. Built With React</p>

    </div>
  )
}
 

export default Footer