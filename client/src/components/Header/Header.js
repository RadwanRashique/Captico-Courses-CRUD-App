import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

function Header() {
  return (
  <div className='container'>
 <div className='navbar'>
<img src={Logo}  alt=''  className='logo'/>
<ul>
    <li >
        CourseList
    </li>
</ul>
<div className='button-box'>
    <button className='courseAddbtn'>AddCourse</button>
    <button className='logout-btn'>Logout</button>
    
</div>
 </div>
  </div>
  
   
  )
}

export default Header
