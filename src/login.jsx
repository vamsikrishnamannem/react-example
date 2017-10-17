import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loginForm:{
            }
        }
    }
    onFormSubmit(e){
        e.preventDefault();
        this.props.history.push("/dashboard");
    }
  render() {
    return ( <div className="login">
    <div className="ms-Grid"> 
    <div className="ms-Grid-row">
        <div className="ms-Grid-col">
        <div className="login-screen"> 
        <div className="app-title">
				<h1>Login</h1>
			</div>
            <form onSubmit={ this.onFormSubmit.bind(this) }>
            <TextField
                label='User Name'
                placeholder="Enter User Name"
                required={ true }
                value={this.state.loginForm.userName}
                />
                <TextField
                label='Password'
                placeholder="Enter Password"
                required={ true }
                value={this.state.loginForm.password}
                />
            < PrimaryButton type="submit"> Login page < /PrimaryButton>
        </form>
        </div>
        </div>
    </div>
  </div>
  </div>
    )
  }
}

export default Login;
