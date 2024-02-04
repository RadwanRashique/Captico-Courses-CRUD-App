import React, { useState } from 'react';
import './EditCourse.css';
import { Link, useNavigate, useLocation, useParams } from 'react-router-dom';
import { ApiEndPoints } from '../../util/apiRoutes';
import { userRequest } from '../../Helper/Interceptor';
import { RouteVariables } from '../../util/RouteVariables';
import toast from 'react-hot-toast';

function EditCourse() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [updation, setUpdation] = useState(false)
  const Data = useLocation();
  console.log(Data?.state?.courseData.courseImage)
  const prevData = Data?.state?.courseData;

  const [editData, setEditData] = useState({
    courseName: prevData.courseName,
    price: prevData.price,
    courseDescription: prevData.courseDescription,
  });

  const handleInputChange = (event) => {
    setUpdation(true)
    const { name, value } = event.target;
    setEditData({ ...editData, [name]: value });
  };



  const handleEdit = async (e) => {

    e.preventDefault()


    if (updation === false) {
      return toast.error("No changes made");
    }

    try {
      const response = await userRequest({
        url: `${ApiEndPoints.editCourse}/${courseId}`,
        method: 'put',
        data: editData,

      });

      if (response.data.success) {
        toast.success(response.data.message);
        navigate(RouteVariables.CourseList);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Sorry, there was an error processing your request.');
    } finally {

    }
  };

  return (
    <>
      <div className='course-Edit-Container'>
        <div className='Edit-page-back'>
          <Link to={RouteVariables.CourseList}>
            <button className='back-button'>Back</button>
          </Link>
        </div>

        <h1>COURSE EDIT</h1>

        <div className='Edit-course-box'>
          <div className='box-content'>
            <label htmlFor='courseName'>Course Name</label>
            <input type='text' id='courseName' name='courseName' defaultValue={prevData.courseName} onChange={handleInputChange} />
            <label htmlFor='price'>Course Price</label>
            <input type='number' id='price' name='price' defaultValue={prevData.price} onChange={handleInputChange} />
            <label htmlFor='courseDescription'>Course Description</label>
            <input type='text' id='courseDescription' name='courseDescription' defaultValue={prevData.courseDescription} onChange={handleInputChange} />
            <div>
              <button className='Edit-button' onClick={handleEdit}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCourse;
