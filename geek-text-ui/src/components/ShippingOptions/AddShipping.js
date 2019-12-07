import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location'

class AddShipping extends Component {
    constructor(props){
        super(props)
        this.state = {
            nickname: "",
            address: "",
            street: "",
            city: "",
            state: "",
            zipcode: ""
        };
        this.updateShipping = this.updateShipping.bind(this);
        this.submitRegister = this.submitShipping.bind(this);
    }

    updateShipping = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            address: this.state.street+", "
            +this.state.city+", "
            +this.state.state+" "
            +this.state.zipcode
        })
    }

    submitShipping = (e) => {
        e.preventDefault();
        
        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;       //user id
        const shipping = "/shipping/";

        fetch(url+currentUser+shipping,{
            method: 'post',
            body: JSON.stringify({
                nickname: this.state.nickname,
                address: this.state.address
            }),headers: { "Content-Type": "application/json; charset=UTF-8" }
        }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

        this.props.addShipping(this.state);
    }

    render() {
        return (

            <form onSubmit={this.submitShipping}>
                <div className="input-group">
                    <label htmlFor="nickname">Address Name</label>
                    
                    <input type="text" id="nickname" onChange={this.updateShipping} className="login-input" placeholder="My House"/>
                </div>

                <div className="input-group">
                    <label htmlFor="street">Street Address</label>
                    <input type="text" id="street" onChange={this.updateShipping} className="login-input" placeholder="123 SW 100 St"/>
                </div>
                       
                <div className="input-group">
                    <label htmlFor="ciy">City</label>
                    <input type="text" id="city" onChange={this.updateShipping} className="login-input" placeholder="Miami"/>
                </div>  

                <div className="input-group">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" onChange={this.updateShipping} className="login-input" placeholder="FL"/>
                </div>

                <div className="input-group">
                    <label htmlFor="zipcode">Zip Code</label>
                    <input type="text" id="zipcode" onChange={this.updateShipping} className="login-input" placeholder="33133"/>
                </div>    
                
                <button type="button" onClick={this.submitShipping} className="login-btn">Add Shipping</button>
            </form>
        )
    }
}

export default AddShipping;