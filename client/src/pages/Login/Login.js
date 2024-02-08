import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { ApiEndPoints } from '../../util/apiRoutes'
import { userRequest } from '../../Helper/Interceptor'
import { RouteVariables } from '../../util/RouteVariables'
import toast from 'react-hot-toast'
function Login() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  console.log(formData)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (formData.email.trim() === '' || formData.password.trim() === '') {
      toast.error('Please fill in all fields');
      return;
    }

    userRequest({
      url: ApiEndPoints.userLogin,
      method: 'post',
      data: formData
    }).then((response) => {


      if (response.data.success) {
        toast.success(response.data.message)

        localStorage.setItem("token", response.data.token)
        navigate(RouteVariables.CourseList)

      }


    }).catch((error) => {

      console.log(error);




    })
  }

  return (
    <>
      <div class='logincontainer'>
        <div class='login-box fadeIn'>
          <h2>SignIn</h2>
          <form onSubmit={handleSubmit} >
            <div class='inputdiv slideIn'>
              <label htmlFor='email'>Email</label>
              <br />
              <input id='password' type='email' name='email' onChange={handleChange} />
              <br />
              <label htmlFor='password'>Password</label>
              <br />
              <input id='password' type='text' name='password' onChange={handleChange} />
            </div>
            <button class='scaleUp'>Login</button>
            <h3 class='signqus bounce'>Don't have an account?</h3>
            <Link to={RouteVariables.userRegister} className='backtosingup pulse'>
              SignUp
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
