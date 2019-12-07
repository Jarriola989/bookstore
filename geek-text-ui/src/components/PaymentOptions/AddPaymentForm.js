import React, { Component } from 'react';
import {CardElement, injectStripe} from "react-stripe-elements";
import Button from 'react-bootstrap/Button';
import { fontSize } from '@material-ui/system';
import { Promise } from 'q';

class AddPaymentForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            card_nickname: "",
            card_number: "",
            expiration: "",
            cvv: "",
        };
    }
    
    submitPayment = (e) => {
        e.preventDefault();
        const cardElement = this.props.elements.getElement('card');

        this.props.stripe.createPaymentMethod({type: 'card', card: cardElement})
        .then(({paymentMethod}) => {
            console.log('Received Stripe PaymentMethod:', paymentMethod);
          });

        var token = this.props.stripe.createToken({type: 'card'});
        console.log(token);
        console.log("customer id: " + this.props.customerId)

        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;       //user id
        const payments = "/payments/";
            fetch(url+currentUser+payments,{
                method: 'post',
                body: JSON.stringify({
                    card_nickname: this.props.customerId,
                    expiration: this.props.stripe.createToken({type: 'card'})
                }),headers: { "Content-Type": "application/json; charset=UTF-8" }
            }).then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        
        //     this.setState({
        //         card_nickname: this.props.customerId,
        //         expiration: this.token
        //     })
        this.props.addPayment(this.state);
    }

    render(){
        return(
            <form onSubmit={this.submitPayment}>
                <CardElement style={{base: {fontSize:'18px'}}} />
                <Button type="button" onClick={this.submitPayment} variant="outline-info">Add Card</Button>
            </form>
            
        );
    }
}

export default injectStripe(AddPaymentForm);