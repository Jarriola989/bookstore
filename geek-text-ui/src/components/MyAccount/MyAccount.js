import React from 'react';
import PaymentOptions from '../PaymentOptions/PaymentOptions';
import ShippingOptions from '../ShippingOptions/ShippingOptions';
import UserInfo from '../UserInfo/UserInfo';
import './MyAccount.css';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tabs'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import {StripeProvider, Elements, CardElement} from "react-stripe-elements";


const MyAccount = props => (

    
    <div style={{backgroundColor:"#FFFFF"}}> 
        <div className="myaccount">

            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/">  
                    <Button variant="info">My Info</Button>
                </Nav.Link>
                <Nav.Link eventKey="link-1">
                    <Button variant="info">Payment Options</Button>
                </Nav.Link>
                <Nav.Link eventKey="link-2">
                    <Button variant="info">Shipping Options</Button>
                </Nav.Link>
            </Nav>

        
            <div >
                <div className="upper-box">
                    <div className="title">Hi {props.loggedInStatus} </div>
                    <UserInfo currentUser={props.currentUser} />
                    
                </div>
                <div className="lower-box">
                    <div className="payment-box">
                        <div className="title">Payment Options:</div>
                        <PaymentOptions currentUser={props.currentUser} customerId={props.customerId} />
                    </div>
                    <div className="shipping-box">
                        <div className="title">Shipping Options</div>
                        <ShippingOptions currentUser={props.currentUser} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MyAccount;