import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faSave } from '@fortawesome/free-solid-svg-icons';
import './UserInfo.css';

class usersInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            error: null,
            users: [],
            hasPaymentOptions: [],
            hasShippingOptions: [],
            first_name: "",
            last_name: "",
            email: "",
            username: "",
            nickname: "",
            password: "",
            verifyPassword: "",
            editing: false
        };
    }
    

    async componentDidMount(){
        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;
        fetch(url+currentUser).then(res => {
            if(res.ok){
                return res.json();
            }else{
                throw Error("Error getting your information!")
            }}).then(users => {
                this.setState({users:users,
                    first_name: users.first_name,
                    last_name: users.last_name,
                    email: users.email,
                    username: users.username,
                    nickname: users.nickname,
                    password: users.password,
                    hasPaymentOptions:users.hasPaymentOptions, 
                    hasShippingOptions:users.hasShippingOptions, 
                    loading:false});
                }).catch(error => this.setState({error:error}))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        },() => console.log(this.state));
    }

    save = () => {
        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;
        fetch(url+currentUser,{
            method: 'put',
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                nickname: this.state.nickname,
                id: currentUser,
                hasShippingOptions: this.state.hasShippingOptions,
                hasPaymentOptions: this.state.hasPaymentOptions
            }), headers: { "Content-Type": "application/json; charset=UTF-8" }
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

        console.log(this.state.users)
        console.log(this.state.hasShippingOptions);
        this.setState({editing: false});
    }


    displayMode = () => {
        const {first_name, last_name, email, username, nickname, password} = this.state;
        return(
            <div className="userinfo">
                <div>
                    <div>Name: {first_name} {last_name}</div>
                    <div>Email: {email}</div>
                    <div>Username: {username}</div>
                    <div>Nickname: {nickname}</div>
                    <div>Password: {password}</div>
                </div>
                <div><FontAwesomeIcon icon={faPen} onClick={()=>{this.switchToEditingMode()}} /></div>
            </div>
        );
    }

    switchToEditingMode = (e) => {
        this.setState({editing: true,
            first_name: this.state.users.first_name,
            last_name: this.state.users.last_name,
            email: this.state.users.email,
            username: this.state.users.username,
            nickname: this.state.users.nickname,
            password: this.state.users.password,
            verifyPassword: this.state.users.password
        })
    }
    editMode = (e) => {
        return(
            <form className="userinfo">
                <div>
                    <div>Name:  <input 
                                    type="text" 
                                    id="first_name" 
                                    
                                    onChange={this.handleChange} 
                                    required 
                                    //className={registerErrors.firstName.length > 1 ? "login-error" : "login-input" }
                                    defaultValue={this.state.users.first_name}
                                    noValidate
                                /> 
                                <input 
                                    type="text" 
                                    id="last_name" 
                                    onChange={this.handleChange} 
                                    required
                                    //className={registerErrors.lastName.length > 0 ? "login-error" : "login-input" }
                                    defaultValue={this.state.users.last_name}
                                    noValidate
                                />
                    </div>
                    <div>Email: <input 
                                    type="email" 
                                    id="email" 
                                    onChange={this.handleChange} 
                                    required
                                    //className={registerErrors.email.length > 0 ? "login-error" : "login-input" }
                                    defaultValue={this.state.users.email}
                                    noValidate
                                />
                    </div>
                    <div>Usersname: <input 
                                    type="text"
                                    id="username"
                                    onChange={this.handleChange} 
                                    required
                                    //className={registerErrors.username.length > 0 ? "login-error" : "login-input" }
                                    defaultValue={this.state.users.username}
                                    noValidate
                                />
                    </div>
                    <div>Nickname:<input 
                                    type="text"
                                    id="nickname"
                                    onChange={this.handleChange} 
                                    required
                                    //className={registerErrors.nickname.length > 0 ? "login-error" : "login-input" }
                                    defaultValue={this.state.users.nickname}
                                    noValidate
                                />
                    </div>
                    <div>New Password: <input 
                                    type="password" 
                                    id="password" 
                                    onChange={this.handleChange} 
                                    required
                                    //className={registerErrors.password.length > 0 ? "login-error" : "login-input" }
                                    defaultValue={this.state.users.password}
                                    noValidate
                                />
                    </div>
                    <div>Verify New Password: <input 
                                    type="password" 
                                    id="verifyPassword" 
                                    onChange={this.handleChange} 
                                    required
                                    //className={registerErrors.verifyPassword.length > 0 ? "login-error" : "login-input" }
                                    defaultValue={this.state.users.verifyPassword}
                                    noValidate
                                />
                    </div>
                </div>
                <div><FontAwesomeIcon icon={faSave} onClick={()=>{this.save()}} /></div>
            </form>
        );
    }

    render(){
        const {loading, error, users} = this.state;

        if(error){
            return <div>{error.message}</div>
        }

        if(loading){
            return <div>Loading...</div>;
        }

        if(!users){
            return <div>No users.</div>;
        }

        if(this.state.editing){
            return this.editMode();
        }else{
            return this.displayMode();
        }
        
    }
}

export default usersInfo;