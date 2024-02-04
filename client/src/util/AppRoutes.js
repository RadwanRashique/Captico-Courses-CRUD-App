import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Register from '../pages/Register/Register';
import { RouteVariables } from './RouteVariables';
import Login from '../pages/Login/Login'
import AddCourse from '../pages/AddCourse/AddCourse'
import CourseList from '../pages/CourseList/CourseList'
import EditCourse from '../pages/EditCourse/EditCourse';
import PublicRoutes from '../components/Public/PublicRoutes'
import ProtectedRoutes from '../components/Protected/ProtectedRoutes'
import {Toaster} from 'react-hot-toast'




function AppRoutes() {
  return (
   <>
   <Toaster/>
   <Routes>
   
<Route path={RouteVariables.userRegister} element={<PublicRoutes><Register/></PublicRoutes>} />
<Route path={RouteVariables.UserLogin}  element={<PublicRoutes><Login/></PublicRoutes>}/>
<Route path={RouteVariables.AddCourse}  element={<AddCourse/>}/>
<Route path={RouteVariables.CourseList}  element={<ProtectedRoutes><CourseList/></ProtectedRoutes>}/>
<Route path={`${RouteVariables.EditCourse}/:courseId`}  element={<ProtectedRoutes><EditCourse/></ProtectedRoutes>}/>

 </Routes>
   
   </>
  )
}

export default AppRoutes
