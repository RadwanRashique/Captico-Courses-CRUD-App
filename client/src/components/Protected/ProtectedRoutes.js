import React from 'react'
import { Navigate } from 'react-router-dom'
import { RouteVariables } from '../../util/RouteVariables'
function UserProtectedRoute(props) {
  
  if (localStorage.getItem('token')) {
    console.log(localStorage.getItem('token'))
    return props.children
  }
  else {
    return <Navigate to={RouteVariables.UserLogin} />
  }

}

export default UserProtectedRoute