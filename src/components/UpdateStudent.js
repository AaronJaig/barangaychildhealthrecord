import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';

import axios from 'axios';


function UpdateStudent() {

    const[vaccine, setVaccine] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        axios.put('http://localhost:8080/update/'+id, {vaccine})
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
              <h1 className="text-center mb-4">Update Vaccine</h1>
              <form onSubmit={handleSubmit}>
                
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

export default UpdateStudent