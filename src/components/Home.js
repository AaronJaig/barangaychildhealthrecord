import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";


function Home  ()  {
  return (
    <div className="container-fluid Home">
      <div className='headerContainer text-center'>
        <h1 className="mb-3">BARANGAY CHILD HEALTH RECORD SYSTEM</h1>
        <h2 className="mb-4">"Childhood's health, our barangay's wealth"</h2>
        
        <Link to="/login" className="btn btn-primary btn-lg">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Home;