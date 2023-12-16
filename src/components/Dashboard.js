// ChildRecordsTable.js
import React from 'react';
import "./dashform";
import "./Dashboard.css";
import axios from 'axios'
import { useEffect, useState } from 'react';
import {Link}from 'react-router-dom';


function Dashboard() {
  const [child, setChild]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8080/')
    .then(res=>setChild(res.data))
    .catch(err=>console.log(err));
  })
  const handleDelete = async (id)=>{
      try{
        await axios.delete('http://localhost:8080/child/'+id)
        window.location.reload()
      }catch(err){
        console.log(err);
      }
  }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center'>
  <div className='w-50 bg-white rounded'>
    <Link to="/create" className='btn btn-success'>
      Input
    </Link>
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Vaccine</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {child.map((data, i) => (
          <tr key={i}>
            <td>{data.Name}</td>
            <td>{data.Vaccine}</td>
            <td>
              <Link to={`/update/${data.ID}`} className='btn btn-primary'>Update</Link>
              <button className='btn btn-danger ms-2' onClick={ e=> handleDelete(data.ID)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Dashboard;
