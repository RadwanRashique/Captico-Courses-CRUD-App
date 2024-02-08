import React, { useState } from 'react';
import './AddCourse.css';
import { ApiEndPoints } from '../../util/apiRoutes';
import { userRequest } from '../../Helper/Interceptor';
import { RouteVariables } from '../../util/RouteVariables';
import toast from 'react-hot-toast';
import defaultImage from '../../assets/defalutcourseImage.png';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

function AddCourse() {
  const navigate = useNavigate();
  const [courseDetails, setCourseDetails] = useState({
    courseName: '',
    price: '',
    courseDescription: '',
    image: null,
  });
  const [defaultImageUrl, setDefaultImageUrl] = useState(defaultImage);
  const [loading, setLoading] = useState(false); // State variable for loading indicator

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setCourseDetails({ ...courseDetails, image: selectedImage });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    const result = await Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to submit your course? You won't be able to update the image later.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit",
      cancelButtonText: "Cancel",
    });


    if (result.isConfirmed) {
      setLoading(true);

      // Validate if all fields are filled
      if (!courseDetails.courseName || !courseDetails.price || !courseDetails.courseDescription || !courseDetails.image) {
        setLoading(false); // Reset loading state
        return toast.error("Please fill all fields");
      }

      // Validate if price is a number
      if (isNaN(courseDetails.price)) {
        setLoading(false); // Reset loading state
        return toast.error("Price should be a number");
      }

      const formData = new FormData();
      formData.append('courseName', courseDetails.courseName);
      formData.append('price', courseDetails.price);
      formData.append('courseDescription', courseDetails.courseDescription);
      formData.append('image', courseDetails.image);

      try {
        const response = await userRequest({
          url: ApiEndPoints.addCourseData,
          method: 'post',
          data: formData,
        });

        if (response.data.success) {
          toast.success(response.data.message);
          navigate(RouteVariables.CourseList);
        } 
      } catch (error) {
        console.error(error);
      
      } finally {
        setLoading(false);
      }
    };
  }
  return (
    <>
      <div className={`course-add-container ${loading ? 'loading-overlay' : ''}`}>
        <div className='add-course-back'>
          <Link to={RouteVariables.CourseList}><button className='Add-back-button'>Back</button></Link>
        </div>
        <h1>ADD COURSE</h1>
        <div className='add-course-box'>
          <div>
            <label htmlFor='courseName'>Course Name</label>
            <input type='text' id='courseName' name='courseName' onChange={handleInputChange} />
            <label htmlFor='price'>Course Price</label>
            <input type='number' id='price' name='price' onChange={handleInputChange} />
            <label htmlFor='courseDescription'>Course Description</label>
            <input type='text' id='courseDescription' name='courseDescription' onChange={handleInputChange} />
            <label htmlFor='image'>Image</label>
            <input type='file' id='image' name='image' onChange={handleImageChange} />
            {!courseDetails.image && <img src={defaultImageUrl} alt='Default Image' style={{ width: '80px' }} />}
            {courseDetails.image && <img src={URL.createObjectURL(courseDetails.image)} alt='Selected Image' className='selected-image' />}
            <div>
              <button className='save-button' onClick={handleSubmit} disabled={loading}>{loading ? 'Saving...' : 'Save'}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCourse;
