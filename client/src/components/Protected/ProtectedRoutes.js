import React from 'react'
import { Navigate } from 'react-router-dom'
import { RouteVariables } from '../../util/RouteVariables'
function UserProtectedRoute(props) {
  // so if there is no token it will navigate to the login page
  if (localStorage.getItem('token')) {
    console.log(localStorage.getItem('token',"888"))
    return props.children
  }
  else {
    return <Navigate to={RouteVariables.UserLogin} />
  }

}

export default UserProtectedRoute