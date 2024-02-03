import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Toaster }from 'react-hot-toast'

import UserRegister from '../pages/Register/Register'
import UserLogin from '../pages/Login/Login'
import CourseList from '../pages/CourseList/CourseList'
import AddCourse from '../pages/AddCourse/AddCourse'
import EditCourse from '../pages/EditCourse/EditCourse'
import { RouteVariables } from './RouteVariables'
import UserPublicRoute from '../components/Public/PublicRoutes'
import UserProtectedRoute from '../components/Protected/ProtectedRoutes'


function AppRoutes() {
  return (
 <>
 <Routes>
 <Toaster/>
 < Route  path={RouteVariables.userRegister}   element={<UserPublicRoute><UserRegister/></UserPublicRoute>} />
 < Route  path={RouteVariables.UserLogin}   element=    {<UserPublicRoute><UserLogin/></UserPublicRoute>}  />
 < Route  path={RouteVariables.CourseList}   element={<UserProtectedRoute><CourseList/></UserProtectedRoute>} />
 < Route  path={RouteVariables.AddCourse}   element={<UserProtectedRoute><AddCourse/></UserProtectedRoute>} />
 < Route  path={`${RouteVariables.EditCourse}/:courseId`}   element={<UserProtectedRoute><EditCourse/></UserProtectedRoute>} />
 </Routes>
 

 
 </>
  )
}

export default AppRoutes
