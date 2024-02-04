import React, { useState, useEffect } from 'react';
import './CourseList.css'; // Import CSS file for styling
import Header from '../../components/Header/Header';
import { ApiEndPoints } from '../../util/apiRoutes';
import { RouteVariables } from '../../util/RouteVariables';
import { userRequest } from '../../Helper/Interceptor';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function CourseList() {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true); // State variable for loading indicator

  const getCourseData = async () => {
    try {
      const response = await userRequest({
        url: ApiEndPoints.getCourseData,
        method: 'get',
      });

      if (response.data.success) {
        setCourseData(response.data.courseData);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Sorry, there was an error fetching the course data.');
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  };

  useEffect(() => {
    getCourseData();
  }, []);

  // handling edit click
  const handleEditCourse = async (course) => {
    navigate(`${RouteVariables.EditCourse}/${course._id}`, { state: { courseData: course } });
  };


  // handling delete
  const handleDeleteCourse = async (courseId) => {
    try {
      const response = await userRequest({
        url: `${ApiEndPoints.deleteCourse}/${courseId}`,
        method: 'delete',
      });
      if (response.data.success) {
        toast.success(response.data.message);
        const updatedCourse = courseData.filter((course) => course._id !== courseId);
        setCourseData(updatedCourse);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Deletion Failed');
    }
  };

  return (
    <>
      <Header />
      <div>
        {loading ? ( // Show loading indicator while data is being fetched
          <div className="loading-indicator">
            <p>Loading...</p>
          </div>
        ) : courseData.length === 0 ? (
          <div className="empty-course-message">
            <p>No courses available. Add a course!</p>
          </div>
        ) : (
          <div className="course-list-container">
            <h2 className="course-table-title">Course List</h2>
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
                  <tr key={course._id}>
                    <td>{index + 1}</td>
                    <td>{course.courseName}</td>
                    <td>
                      <img src={course.courseImage} alt={course.name} className="course-image" />
                    </td>
                    <td>{course.courseDescription}</td>
                    <td>₹{course.price}</td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEditCourse(course)}>
                        Edit
                      </button>
                      <button className="delete-btn" onClick={() => handleDeleteCourse(course._id)}>
                        Delete
                      </button>
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
