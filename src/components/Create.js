import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import axios from 'axios';


function Create() {
    const[name, setName] = useState('')
    const[vaccine, setVaccine] = useState('')
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8080/create', {name,vaccine})
        .then(res => {
            navigate('/dashboard');

        }).catch(err=>console.log(err));
    }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5 login-signup-box border">
            <div className="card-body ">
              <h1 className="text-center mb-4">Add Patient</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Name:</label>
                  <input type="text" className="form-control" id="name" name="name"
                  onChange={e=> setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="vaccine" className="form-label">Vaccine:</label>
                  <input type="text" className="form-control" id="vaccine" name="vaccine" 
                    onChange={e=> setVaccine(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create