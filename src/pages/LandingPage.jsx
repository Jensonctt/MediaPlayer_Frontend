import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl =useNavigate()
  return (
   <>
      <Row className='mt-5 mb-5 d-flex align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h3>Welcome to <span className='text-warning'> Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, itaque magni eos minus at nesciunt, non nam id praesentium, quod quisquam dicta temporibus sit voluptatum quam inventore soluta labore aperiam!dolor sit amet consectetur adipisicing elit. Pariatur, itaque magni eos minus at nesciunt, non nam id praesentium, quod quisquam dicta temporibus sit voluptatum quam inventore soluta labore aperiam</p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get started <i class="fa-solid fa-arrow-right"></i></button>
        </Col>
        <Col></Col>
        <Col lg={5}>
          <img src='https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif' alt="no image"/>
        </Col>
      </Row>
  
      <div className='container mb-5 mt-5 d-flex align-items-center justify-content-center flex-column'>
        <h3>Features</h3>
        <div className='cards d-flex align-items-center justify-content-evenly w-100 mt-5 mb-5'>
        <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-4' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        
      </div>
      <div className='container mb-5 mt-5 border border-2 border-secondary d-flex rounded p-5 align-items-center justify-content-center w-100'>
        <div className="col-lg-6">
          <h3>Simple Fast And Powerfull</h3>
          <p> <span className='fs-5 fw-bolder '>Play Everything</span>:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime aut voluptatibus asperiores voluptatum repudiandae! Ipsum, nobis exercitationem quis doloribus earum ipsa soluta, ex quaerat molestias cupiditate at obcaecati dolores.</p>
          <p> <span className='fs-5 fw-bolder '>Play Everything</span>:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime aut voluptatibus asperiores voluptatum repudiandae! Ipsum, nobis exercitationem quis doloribus earum ipsa soluta, ex quaerat molestias cupiditate at obcaecati dolores.</p>
          <p> <span className='fs-5 fw-bolder '>Play Everything</span>:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime aut voluptatibus asperiores voluptatum repudiandae! Ipsum, nobis exercitationem quis doloribus earum ipsa soluta, ex quaerat molestias cupiditate at obcaecati dolores.</p>
            </div> 
        <div className="col-lg-6 ">
        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/deQcxldcOog" title="LEO - Lokiverse 2.0 Theme Video | Thalapathy Vijay | Anirudh Ravichander | Lokesh Kanagaraj" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   
          </div> 
          
      </div>

   </>
  )
}

export default LandingPage