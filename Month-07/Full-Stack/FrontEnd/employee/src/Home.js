
import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import  'bootstrap-icons/font/bootstrap-icons';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//Home page
function Home(){
    const [APIData, setAPIData] = useState([]);
    
    const LoadData = async() => {
    await axios
      .get("http://localhost:8001/employee")
      .then((res) => {
        setAPIData(res.data);
      });
  }

  const  Delete  = async(id)=>{
    await axios
      .delete(`http://localhost:8001/employee/${id}`)
      .then((res) => {
      alert("employee deleted");
      });
  }
  useEffect(() => {
    LoadData();
  }, []);
  useEffect(() => {
    LoadData();
  }, [APIData]); // after delete


    return(
        <div>
          <nav className="navbar navbar-dark bg-dark text-white">
              <h1 >Manage Employee</h1>
          </nav>
        <div className="input-group rounded mt-5">
        <Link to='/create'>
         <button className='btn btn-secondary'>Add Employee</button>
        </Link>
        </div>
        <table className="table mt-5 p-2" >
        <thead>
        <tr>
          <th scope="col">Employee ID</th>
          <th scope="col">Name</th>
          <th scope="col">Position</th>
          <th scope="col">Salary</th>
          <th scope="col">Actions</th>
        </tr>
    </thead>
            <tbody  id="tbl">
            {APIData.map((data,index) => {
      return (
        <tr key={index}>
          <th scope="row" >{data.employee_Id}</th>
            <td>{data.name}</td>
            <td>{data.position}</td>
            <td>{data.salary}</td>
            <td> <button>
                     <FontAwesomeIcon icon={faTrash}   onClick={() => {
                          if (window.confirm("Are you sure to delete?")) {
                            Delete(data.employee_Id);
                          }
                        }}   />  
          </button>
            </td>
          </tr>
    )})}
            </tbody>
          </table>
        </div>
            
    )

}
export default Home;