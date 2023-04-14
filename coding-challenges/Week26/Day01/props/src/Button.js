import 'bootstrap/dist/css/bootstrap.css';
import  React ,{Component} from "react";

///class component
class Button extends Component
{
    constructor(props) {
        super()
        this.props = props
    }
    render(){
        return(
          <div>
            <button type="submit" className="btn btn-warning m-5">{this.props.textToDisplay}</button>
          </div>
        )
    }

}
export default Button;
