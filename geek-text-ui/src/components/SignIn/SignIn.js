import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SignIn.css';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            loginError: "",
            users: [],
            error: null
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            users: this.props.userList,
            [e.target.id]: e.target.value
        });
        console.log(this.state);
    }

    submitLogin(e) {
        e.preventDefault();
        const {username, password} = this.state;
        this.state.users.map(user => {
            if(user.username === this.state.username && user.password === this.state.password){
                this.props.handleSuccessfulAccount(user);
            }else if(user.username !== this.state.username){
                this.setState({loginError: "Account does not exist."}) //fix bug
            }else if(user.username === this.state.username && user.password !== this.state.password){
                this.setState({loginError: "Incorrect password."})
            }
        })
        console.log(this.state);
    }

    render() {
        return (
            <div className="inner-container">

                <div className="header">
                    Sign In
                </div>

                <form className="box" onSubmit={this.submitLogin}>
                
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            onChange={this.handleChange}
                            required
                            className="login-input" 
                            placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            onChange={this.handleChange}
                            required
                            className="login-input" 
                            placeholder="Password"/>
                    </div>
                    {this.state.loginError}
                    <button type="submit" className="login-btn" onClick={this.submitLogin}>Sign In</button>

                </form>

            </div>
        );
    }
}


export default SignIn;