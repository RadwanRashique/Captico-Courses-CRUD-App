import React, { useState } from 'react';
import './AddCourse.css';

function AddCourse() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  return (
    <div className='course-add-container'>
      <div className='add-course-back'>
        <button className='Add-back-button'>Back</button>
      </div>
    
      <h1>ADD COURSE</h1>
      
      <div className='add-course-box'>
        <div>
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
          <button className='save-button'>Save</button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
