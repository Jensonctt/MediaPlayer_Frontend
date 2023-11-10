import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { deleteVideo } from '../services/allAPI';
import { addToHistory } from '../services/allAPI';




function Videocard({displayVideo , setdeleteVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true)

    const {caption , embedLink} = displayVideo
     const today = new Date
    /* console.log(today);  */
    let timestamp = new Intl.DateTimeFormat('en-US',{
      year:'numeric',
      month:'2-digit',
      date:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    console.log(timestamp);

  let videoDetails = {
    caption,
    embedLink,
    timestamp
  }
  await addToHistory(videoDetails)
  }
    
  

  const removeVideo = async(id)=>{
  const response =  await deleteVideo(id)
  console.log(response);
  setdeleteVideoStatus(true)
  }

  const dragStarted =(e,id)=>{
    console.log(`card no ${id} started dragging `);
    /* console.log(e); */
    e.dataTransfer.setData("videoID",id)
  }
 
  return (
    <div>
        <Card style={{ width:'100%',height: '350px' }} className='mb-4' draggable onDragStart={(e)=>dragStarted(e,displayVideo?.id)}>
        <Card.Img height={'300px' } onClick={handleShow} variant="top" src={displayVideo.url} />
        <Card.Body>
            <Card.Text className='d-flex justify-content-between align-items-center'>
            <h6>
            {displayVideo.caption}
            </h6>
            <button onClick={()=>removeVideo(displayVideo?.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button> 
            </Card.Text>
        </Card.Body>
        </Card>



        <Modal
        show={show}
        onHide={handleClose}
      >

        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <iframe width="100%" height="507" src={`${displayVideo.embedLink}`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>


    </div>
  )
}

export default Videocard