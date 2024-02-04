import React from 'react'
import { Navigate } from 'react-router-dom'
import { RouteVariables } from '../../util/RouteVariables'

function userPublicRoute(props) {
    if (localStorage.getItem("token")) {

        return <Navigate to={RouteVariables.CourseList} />
    }

    else {
        return props.children
    }

}

export default userPublicRoute