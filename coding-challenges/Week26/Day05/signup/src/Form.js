
import 'bootstrap/dist/css/bootstrap.css';

const FormDetails = () => {
    return (
      <div>
        <h1>Sign Up</h1>
        <form method="post" Style="margin-left:30%">
          <TextInput
            label={"Name"}
            placeholder="Name"
            type="text"
            name="name"
            required
          />
          <TextInput
            label={"Email"}
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <TextInput
            label={"Phone"}
            placeholder="Phone"
            type="text"
            name="phone"
            required
          />
          <TextInput
            label={"Address"}
            placeholder="Address"
            type="text"
            name="address"
            required
          />
          <TextInput
            label={"Password"}
            placeholder="Password"
            type="Password"
            name="password"
            required
          />
        </form>
        <button type="submit" className="btn btn-primary mt-3">Sign in</button>
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
                        placeholder={placeholder || "Text"}
                        type={type || "text"}
                        onChange={onChangeAction}
                        />
            </div>
        </div>
    );
  };