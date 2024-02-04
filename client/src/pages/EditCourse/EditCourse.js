import React,{useState} from 'react'
import './EditCourse.css'
function EditCourse() {

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };
  
  return (
   <>
  

  <div className='course-Edit-Container'>
    <div className='Edit-page-back'>
      <button className='back-button'>Back</button>
    </div>
  
    <h1>COURSE EDIT</h1>
    
    <div className='Edit-course-box'>
      <div className='box-content'>
        <label>Course Name</label>
        <input type='text' />
        <label>Course Price</label>
        <input type='text' />
        <label>Course Description</label>
        <input type='text' />
        <label>Image</label>
        <input type='file' onChange={handleImageChange} />
        {image && <img src={image} alt='Selected Image' className='selected-image' />}
        <div>
        <button className='Edit-button'>Edit</button>
        </div>
       
      </div>
    </div>
  </div>
   </>
  )
}

export default EditCourse
