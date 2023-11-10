import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { uploadALLVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const  [video,setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
/* console.log(video);
 */
const embedVideoLink = (e)=>{
  const {value} = e.target
  console.log(value.slice(-11));
  const link = `https://www.youtube.com/embed/${value.slice(-11)}`
  setVideo({...video,embedLink:link})
}
console.log(video);

  const handleUpload = async ()=>{
    const {id,caption,url,embedLink} = video
    if(!id ||!url ||!caption ||!embedLink){
      toast.warning('please fill the form completely')
     
     
    }
    else{
      const response = await uploadALLVideo(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success(`${response.data.caption} is successfully Uploaded`)

        //to change the value of uploadVideoStatus
        setUploadVideoStatus(response.data)

       //making the state value none
       setVideo({
      id:"",
      caption:"",
      url:"",
      embedLink:""
       })

         //to close this modal
      handleClose()
      }
      else{
        console.log(response);
        toast.error('something Went Wrong Try again later')
      }
    }
  }

    
  return (
    
    <>
      <div className="d-flex upload-container container justify-content-between">
            <div className='d-flex gap-2'>
              <h5>Upload new video</h5>
              <button onClick={handleShow} style={{background:'transparent',border:'none'}}><i class="fa-solid fa-cloud-arrow-up fa-2x" style={{color:'gold'}}></i></button>
            </div>
            <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title> <i class="fa-solid fa-film"></i>Upload Videos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
  
            <form className='border border-secondary p-3 rounded'>
  
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onChange={(e)=>setVideo({...video,id:e.target.value})} type="text" placeholder="Enter Video ID" />
         </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control  onChange={(e)=>setVideo({...video,caption:e.target.value})} type="text" placeholder="Enter Video Caption" />
         </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control  onChange={(e)=>setVideo({...video,url:e.target.value})} type="text" placeholder="Enter Video Image URL" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={embedVideoLink} />
          </Form.Group>
          </form>
  
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleUpload}  variant="primary">Upload</Button>
          </Modal.Footer>
        </Modal>
            <div className=''>
              <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}> <h5>Watch History</h5></Link>
            </div>
        </div>
        
        <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Add