
import React,{useState,useEffect} from 'react';
import './CourseList.css'; // Import CSS file for styling
import Header from '../../components/Header/Header';
import { ApiEndPoints } from '../../util/apiRoutes';
import { RouteVariables } from '../../util/RouteVariables'
import { userRequest } from '../../Helper/Interceptor';
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';
function CourseList() {
    const navigate = useNavigate()
    const [courselist,setCourselist]=useState([])
    const courseData = [
 { id: 1, name: 'Course 1', image: 'image1.jpg', description: 'Description 1', price: '$10.00' },
        { id: 2, name: 'Course 2', image: 'image2.jpg', description: 'Description 2', price: '$20.00' },
        { id: 3, name: 'Course 3', image: 'image3.jpg', description: 'Description 3', price: '$30.00' },

    ];

    return (
      <>
        <Header />
        <div>
            {courseData.length === 0 ? (
                <div className="empty-course-message">
                    <p>No courses available. Add a course!</p>
                </div>
            ) : (
                <div className="course-list-container">
                    <h2 className='course-table-title'>Course List</h2>
                    <br />
                    <table className="course-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Course Name</th>
                                <th>Course Image</th>
                                <th>Course Description</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courseData.map((course, index) => (
                                <tr key={course.id}>
                                    <td>{index + 1}</td>
                                    <td>{course.name}</td>
                                    <td>
                                        <img src={course.image} alt={course.name} className="course-image" />
                                    </td>
                                    <td>{course.description}</td>
                                    <td>{course.price}</td>
                                    <td>
                                        <button className="edit-btn">Edit</button>
                                        <button className="delete-btn">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
      </>
    );
}

export default CourseList;
