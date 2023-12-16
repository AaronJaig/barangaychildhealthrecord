import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import validation from './SignUpValidation';
import { useState } from "react";
import axios from 'axios'


function Signup() {
  const [values, setValues] = useState({
    username:'',
    password:'',
    name:''

  })
  const [errors, setErrors] = useState({})
  const handleInput= (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const navigate = useNavigate();
  const handleSubmit= async (event)=>{
    event.preventDefault();
    await setErrors(validation(values));
    console.log(values);

    if(errors.username === "" && errors.password ===""){
      axios.post('http://localhost:8080/signup', values)
  .then(res => {
    navigate('/login') // Log the response data
  })
  .catch(err => {
    console.error(err); // Log the error
    if (err.response) {
      console.error('Server responded with a status code:', err.response.status);
    } else if (err.request) {
      console.error('No response received:', err.request);
    } else {
      console.error('Error setting up the request:', err.message);
    }
  });

    }

  } 
  
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card mt-5 login-signup-box border">
          <div className="card-body ">
            <h1 className="text-center mb-4">Sign Up</h1>
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name:</label>
                <input type="text" className="form-control" id="Name" onChange={handleInput} name="Name" required/>
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input type="text" className="form-control" id="username" onChange={handleInput} name="username" />
                {errors.username && <span className='text-danger'>{errors.username}</span>}

              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" className="form-control" id="password" onChange={handleInput} name="password" />
                {errors.password && <span className='text-danger'>{errors.password}</span>}

              </div>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <p className="mt-3">
              Already have an account?{' '}
              <Link to="/login">Login here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Signup;