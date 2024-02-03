import React from 'react'
import { Navigate } from 'react-router-dom'
import { RouteVariables } from '../../util/RouteVariables'
function userProtectedRoute(props) {
  // so if there is no token it will navigate to the login page
  if (localStorage.getItem('token')) {
    return props.children
  }
  else {
    return <Navigate to={RouteVariables.UserLogin} />
  }

}

export default userProtectedRoute