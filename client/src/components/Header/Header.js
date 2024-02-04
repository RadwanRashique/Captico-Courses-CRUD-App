import React,{useState,useEffect} from 'react'
import './Header.css'
import { userRequest } from '../../Helper/Interceptor'
import { ApiEndPoints } from '../../util/apiRoutes'
import  {RouteVariables} from '../../util/RouteVariables'
import Logo from '../../assets/logo.png'
import { Link,useNavigate } from 'react-router-dom'


function Header() {
    const [userName,setUserName]= useState('User')

const navigate=useNavigate()
    // handling logout
  const handleLogout=() => {
    localStorage.removeItem("token")
   
    navigate(RouteVariables.UserLogin)
    
  }

//   to get userName
const getUserName=()=>{
    userRequest({
      url:ApiEndPoints.getUserName,
      method:'get'
   }).then((response)=>{

       
          if (response.data.success) {
             
            setUserName(response.data.userName)
          }
      
   }).catch((error)=>{
    
     console.error(error);
      
   })
  }
  useEffect(()=>{
    getUserName()
   
  },[])
  return (
  <div className='container'>
 <div className='navbar'>
<img src={Logo}  alt=''  className='logo'/>
<ul>

     
      
    <li >
       Hello,{userName}
    </li>
</ul>
<div className='button-box'>
<Link to={RouteVariables.AddCourse}> <button className='courseAddbtn'>Add Course+</button> </Link>
    <button className='logout-btn'  onClick={handleLogout}>Logout</button>
    
</div>
 </div>
  </div>
  
   
  )
}

export default Header
