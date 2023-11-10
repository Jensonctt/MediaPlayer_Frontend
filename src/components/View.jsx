import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Row,Col } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {

  const [allVideo , setAllVideo] = useState([])

  const [deleteVideoStatus , setdeleteVideoStatus]=useState(false)

  const getAllUploadedVideos = async()=>{
    const response = await getAllVideos()
   /*  console.log(response); */
    const {data}=response
 /*    console.log(data); */
    setAllVideo(data)

  }
console.log(allVideo);

  useEffect(()=>{
    getAllUploadedVideos()
    setdeleteVideoStatus(false)
  },[uploadVideoStatus , deleteVideoStatus])
  return (
    <>
       <Row>
        {allVideo.length>0?
         allVideo.map((video)=>(<Col sm={12} md={6} lg={4} xl={3}>
          <Videocard displayVideo = {video} setdeleteVideoStatus={setdeleteVideoStatus}/>
      </Col>))
       :
        <p>Nothing to Display</p>}
          
       </Row>
    </>
  )
}

export default View