import React,{ useState } from 'react';
import './Register.css';
import Logo from '../../assets/icon.png'
import toast from 'react-hot-toast';
import { Link,useNavigate } from 'react-router-dom'
import { ApiEndPoints } from '../../util/apiRoutes'
import { userRequest } from '../../Helper/Interceptor'
import { RouteVariables } from '../../util/RouteVariables'

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // form validations


    if (!formData.username || !formData.password || !formData.phone || !formData.email ||  !formData.confirmPassword) {
      return toast.error("Please fill all details");
    }
    if (formData.username.trim() === "") {
      return toast.error("Enter your name.");
    } else if (!/^[a-zA-Z\s]+$/.test(formData.username)) {
      return toast.error("Name can only contain letters and spaces.");
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailPattern.test(formData.email.toLowerCase())) {
      toast.error('Please enter a valid Gmail address');
      return;
    }

    if (/^\d+$/.test(formData.phone) &&formData. phone.length === 10) {
    } else {
      return toast.error("Please enter your valid 10-digit mobile number.");
    }
    if (formData.password.length <= 5) {
      return toast.error("Please enter a minimum of 6 characters for the password.");
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password Mismatch");
      return;
    }
}
  return (
    <>
      <main>
        <div className='box'>
          <div className='inner-box'>
            <form  onSubmit={handleSubmit}  className='Register-form'>
              <h1>SignUp</h1>
           
              <h3>WELCOME TO CAPTICO</h3>
              <img src={Logo} alt='logo' className='logo-img' />
              <div className='Container-Form'>
                <label htmlFor='username'>Enter Your Name</label>
                <br />
                <input id='username' name='username' type='text' placeholder='Name' onChange={handleChange} />
                <br />
                <label htmlFor='email'>Enter Your Email</label>
                <br />
                <input id='email' name='email' type='email' placeholder='Email' onChange={handleChange} />
                <br />
                <label htmlFor='phone'>Enter Your Phone</label>
                <br />
                <input id='phone' name='phone' type='number' placeholder='Phone' onChange={handleChange}/>
                <br />
                <label htmlFor='password'>Enter Your Password</label>
                <br />
                <input id='password' name='password' type='text' placeholder='Password' onChange={handleChange}/>
                <br />
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <br />
                <input
                  id='confirmPassword'
                  name='confirmPassword'
                  type='text'
                  placeholder='Confirm Password'
                  onChange={handleChange}
                />
                <br />
                <button className='Regbtn'>Register</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;
