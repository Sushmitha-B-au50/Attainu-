import React ,{useState} from 'react';
import axios from 'axios';
import qs from "qs";   
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import './index.css';


const FormDetails = () => {
  const[Name,getName] = useState("");
  const[EmployeeId,getEmployeeID] = useState("");
  const[Salary,getSalary] = useState("");
  const[Position,getPosition] = useState("");

  const navigate=useNavigate();


  const  formValues=async()=>{
    debugger;
    const url = "http://localhost:8001/employee";
    let data = {
     Name: Name,
     EmployeeId:EmployeeId,
     Salary:Salary, 
     Position:Position
    };
    let options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: qs.stringify(data),
      url
    };
    await axios(options)
      .then(res => {
        alert("employee added", res.data);
        navigate("/");
      })
      .catch(err => {
        alert("data not added ", err);
      });
  };

    return (
      <div className="main">
        <h1>Create Employee</h1>
        <form onSubmit={formValues}>
        <TextInput
            label={"EmployeeID"}
            placeholder="EmployeeID"
            type="Number"
            name="employeeID"
            value={EmployeeId} 
            onChangeAction={(e) => getEmployeeID(e.target.value)}
            required
          />
          <TextInput
            label={"Name"}
            placeholder="Name"
            type="text"
            name="name"
            value={Name} 
            onChangeAction={(e) => getName(e.target.value)}
            required
          />
         
          <TextInput
            label={"Salary"}
            placeholder="Salary"
            type="number"
            name="salary"
            value={Salary} 
            onChangeAction={(e) => getSalary(e.target.value)}
            required
          />
          <TextInput
            label={"Position"}
            placeholder="Position"
            type="text"
            name="position"
            value={Position} 
            onChangeAction={(e) => getPosition(e.target.value)}
            required
          />
         <button  type='submit'   className="btn btn-primary m-3">Add Employee</button>
       
        </form>
        </div>
    );
  };
  
  export default FormDetails;

  const TextInput = ({
    label,
    type,
    onChangeAction,
    placeholder,
  }) => {
    return (
            <div className="form-group row m-3">
            <label  className="col-sm-2 col-form-label">{label}</label>
                <div className="col-sm-5">
                    <input className="form-control"
                            placeholder={placeholder || "Text"} type={type || "Text"}
                            onChange={onChangeAction}
                            />
                </div>
            </div>
    );
  };