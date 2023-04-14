import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const FormDetails = () => {
    const[name,getName] = useState("");
    const[email,getEmail] = useState("");
    const[phone,getPhone] = useState("");
    const[address,getAddress] = useState("");
    const[password,getPassword] = useState("");

    const formValues = () => {
        console.log(name  ,email, phone ,address,password );
      }
    return (
      <div>
        <h1>Sign Up</h1>
        <form  method="post" Style="margin-left:30%;">
          <TextInput
            label={"Name"}
            placeholder="Name"
            type="text"
            name="name"
            value={name} 
            onChangeAction={(e) => getName(e.target.value)}
            required
          />
          <TextInput
            label={"Email"}
            placeholder="Email"
            type="email"
            name="email"
            value={email} 
            onChangeAction={(e) => getEmail(e.target.value)}
            required
          />
          <TextInput
            label={"Phone"}
            placeholder="Phone"
            type="number"
            name="phone"
            value={phone} 
            onChangeAction={(e) => getPhone(e.target.value)}
            required
          />
          <TextInput
            label={"Address"}
            placeholder="Address"
            type="text"
            name="address"
            value={address} 
            onChangeAction={(e) => getAddress(e.target.value)}
            required
          />
          <TextInput
            label={"Password"}
            placeholder="Password"
            type="Password"
            name="password"
            value={password} 
            onChangeAction={(e) => getPassword(e.target.value)}
            required
          />
        </form>
        <button type="button" onClick={formValues} className="btn btn-primary mt-3">Sign in</button>
      </div>
    );
  };
  
  export default FormDetails;

  const TextInput = ({
    label,
    onChangeAction,
    placeholder,
  }) => {
    return (
            <div className="form-group row m-3">
            <label  className="col-sm-2 col-form-label">{label}</label>
                <div className="col-sm-5">
                    <input className="form-control"
                            placeholder={placeholder || "Text"}
                            onChange={onChangeAction}
                            />
                </div>
            </div>
    );
  };