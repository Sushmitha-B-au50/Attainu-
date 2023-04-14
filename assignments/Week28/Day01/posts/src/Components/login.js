import NavBar from './navbar';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';



  const validation = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String(email).toLowerCase()))
      return (true)
    else return false
   
}

 

const TextInput = ({
    label,
    type,
    onChangeAction,
    placeholder,
}) => {
    return (
        <div className="form-group row m-3">
            <label className="col-sm-2 col-form-label">{label}</label>
            <div className="col-sm-5">
                <input className="form-control"
                    placeholder={placeholder || "Text"}
                    type={type || "text"}
                    onChange={onChangeAction}
                />
            </div>
        </div>
    );
};



export default
    function Login() {
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");
    
    const formValues = () => {
        if(!email && !password)
        {
          alert("email & password are mandatory");
        }
        else
        {
            if(!password)
                alert("password is mandatory");
            if(!validation(email))
                alert("give proper email address");
            else
            {
               console.log(email, password);
               alert("console logged");
            }
        }
    }

    return (
        <>
            <NavBar />

            <div>
                <h1>Log In</h1>
                <form method="post" style={{marginLeft:"30%"}}>
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
        </>
    )
}