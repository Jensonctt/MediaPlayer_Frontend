import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { addCategory, deleteCategory, getAVideo, updateCategory } from '../services/allAPI';
import { getAllcategory } from '../services/allAPI';
import {Row , Col} from 'react-bootstrap';
import Videocard from './Videocard';



function Category() {
 
  const removeCategory = async(id)=>{
    await deleteCategory(id)
    getAllcategory()
  }
   const [categoryName,setCategoryName] = useState({})

  const [getAllcateogry , setAllCategory] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //function to add category
    const handleAddCategory =async()=>{
    console.log(categoryName);
    if(categoryName){
      let body = {
        categoryName,
        allVideos:[]
      }
      //make api call
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        alert('Category  successfully Added')
        //to make state null after successfull after addition
        setCategoryName("")
        //to close modal
        handleClose()

      }
      else{
        alert('please fill the category name')
      }
    }
    }

    //
    //function to get all category
    const getALLCategory = async()=>{
      const {data} = await getAllcategory()
      /* console.log(data); */
      setAllCategory(data)
    }
    console.log(getAllcateogry);

    //dragover eventlistener
    const dragover =(e)=>{
      //this will prevent reload so that the data that we send from videocard.jsx wont be last+
      e.preventDefault()
      console.log('inside dragover');
    }

    const videoDrop = async(e, categoryId)=>{
      console.log(`dropped inside the categoryid ${categoryId}`);

      //to get the videoid that is send from videocard component
     const videoid = e.dataTransfer.getData("videoid")
     console.log(videoid);

    //api to get the particular video  that is draged
    const {data} = await getAVideo(videoid)
    console.log(data);  
    
    let selectedCategory = getAllcateogry?.find(item=>item.id===categoryId)
    console.log(selectedCategory);

    //data added to the array in the particular category with specific id
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    await updateCategory(categoryId,selectedCategory)
    getALLCategory()
    }

    useEffect(()=>{
      getALLCategory()
    },[])
  return (

   <>
    
    <div>
            <button onClick={handleShow} style={{width:'300px'}} className='btn btn-warning'> Add New Category</button>
        </div>

        {
          getAllcateogry?.length>0?
          getAllcateogry?.map((item)=>(
            <div className='mt-5 border border-secondary rounded p-8 '>
              <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e, item?.id)}>
                <h6>{item.categoryName}</h6>
                <button onClick={()=>removeCategory(item?.id)} className='btn btn-danger' style={{border:'none'}}><i class="fa-solid fa-trash-can"></i></button>
              </div>
              <Row>
                <Col>
               { item.allVideos?.length>0?
                item.allVideos.map(Card=>(<Videocard displayVideo={Card}/>)):<p>Nothing to Display</p>}
                </Col>
              </Row>
            </div>
          )): <p>Nothing to display</p>
        }


        
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> <i class="fa-solid fa-pencil me-2 text-warning"></i>Add New Category</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
        
          <form className='border border-secondary p-3 rounded'>

       

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category Name</Form.Label>
        <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Enter Category Name" />
       </Form.Group>

      
        </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
   </>
      

  )
}

export default Category