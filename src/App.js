import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Dashform from "./components/dashform";
import Create from "./components/Create";
import "./App.css";
import Login from "./components/Login";
import UpdateStudent from './components/UpdateStudent';



function App  ()  {
  return(
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/update/:id' element={<UpdateStudent/>}/>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/signup" exact element={<Signup/>}/>
          <Route path="/dashboard" exact element={<Dashboard/>}/>
          <Route path="/dashform" exact element={<Dashform/>}/>
          <Route path="/create" exact element={<Create/>}/>

        </Routes>
      </Router>
    </div>
    
  );
};
export default App;