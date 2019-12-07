import React, { Component } from 'react';
import AddPayment from './AddPayment';
import './PaymentOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen, faSave } from '@fortawesome/free-solid-svg-icons';
import {StripeProvider, Elements, CardElement} from "react-stripe-elements";
import AddPaymentForm from './AddPaymentForm';



class PaymentOptions extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards : [],
            loading: true,
            error: null,
            editing: false,
            card_nickname: "",
            card_number: "",
            expiration: "",
            exp_month: "",
            exp_year: "",
            cvv: ""
        };
    }
    

    async componentDidMount(){
        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;
        const payment = "/payments/";
        fetch(url+currentUser+payment).then(res => {
            if(res.ok){
                return res.json();
            }else{
                throw Error("Error getting payment methods!")
            }
        }).then(cards => {
            this.setState({cards:cards, 
                loading:false
            });
        }).catch(error => this.setState({error:error}))
        
    }

    addPayment = (card) => {
        let cards = [...this.state.cards, card];
        this.setState({
            cards: cards
        })
    }
    
    deletePayment = (id) => {
        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;
        const payments = "/payments/";
        
        if(window.confirm('Are you sure you want to permanently delete?')){
            let cards = this.state.cards.filter(card => {
                return card.id !== id                   //return all cards except the one that was deleted
            });
            this.setState({
                cards: cards
            })
            fetch(url+currentUser+payments+id,{
                method: 'delete',
                headers: { "Content-Type": "application/json; charset=UTF-8" }
            })
        }
    }

    updatePayment = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        },() => console.log(this.state));
    }

    // save = (id) => {
    //     const url = "http://localhost:8090/api/users/";
    //     var currentUser = this.props.currentUser;
    //     const payments = "/payments/";
    //     fetch(url+currentUser+payments+id,{
    //         method: 'put',
    //         body: JSON.stringify({
    //             card_nickname: this.state.card_nickname,
    //             card_number: this.state.card_number,
    //             expiration: this.state.exp_month+"/"+this.state.exp_year,
    //             cvv: this.state.cvv,
    //             id: id
    //         }), headers: { "Content-Type": "application/json; charset=UTF-8" }
    //     }).then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))

    //     this.setState({editing: false})
    // }

    displayMode = (card) => {
        return (
            <div className="options">
                <div key={card.id}>
                    <div>Card Name: {card.card_nickname}</div>
                    <div>Card Number: {card.card_number}</div>
                    <div>Expiration: {card.expiration}</div>
                    <div>CVV: {card.cvv}</div>
                </div>
                <div className="buttons">
                    <button className="standard-btn" onClick={() => {this.switchToEditMode(card)}} ><FontAwesomeIcon icon={faPen} style={{top: "0", right: "0", float: "top", margin: "0 auto", justifyContent: "flex-end"}} /></button>
                    <button className="standard-btn" onClick={() => {this.deletePayment(card.id)}}><FontAwesomeIcon icon={faTrashAlt} style={{top: "0", right: "0"}} /></button>
                </div>
            </div>
        )
    }
    switchToEditMode = (card) => {
        this.setState({editing: true,
            card_nickname: card.card_nickname,
            card_number: card.card_number,
            expiration: card.expiration,
            cvv: card.cvv
        })
    }

    editMode(card){
        return (
            <div className="options">
                <div key={card.id}>
                    <div>Card Name: 
                        <input type="text" id="card_nickname" onChange={this.updatePayment} className="login-input" defaultValue={card.card_nickname}/>
                    </div>
                    <div>Card Number: 
                        <input type="text" id="card_number" onChange={this.updatePayment} className="login-input" defaultValue={card.card_number}/>
                    </div>
                    <div>Expiration: 
                        <input type="text" id="exp_month" onChange={this.updatePayment} className="login-input" placeholder="MM"/> /
                        <input type="text" id="exp_year" onChange={this.updatePayment} className="login-input" placeholder="YY"/>
                    </div>
                    <div>CVV: 
                        <input type="text" id="cvv" onChange={this.updatePayment} className="login-input" defaultValue={card.cvv}/>
                    </div>

                </div>
                <div>
                    <button className="standard-btn" onClick={() => {this.save(card.id)}} ><FontAwesomeIcon icon={faSave} style={{position:"absolute", top: "0"}} /></button>
                </div>
            </div>
        )
    }

    render() {
        const { cards } = this.state;
        const cardlist = cards.map(card => {
            if(this.state.editing){
                return this.editMode(card);
            }else{
                return this.displayMode(card);
            }
        })
        return (
            <div>
                { cardlist }
                <AddPayment addPayment={this.addPayment} currentUser={this.props.currentUser} />
                <StripeProvider apiKey="pk_test_3I8mbDxyjOmteB9RQesgtBs1007nnIzspj">
                    <Elements>
                        <AddPaymentForm addPayment={this.addPayment} currentUser={this.props.currentUser} customerId={this.props.customerId} />
                    </Elements>
                </StripeProvider> 
                
            </div>
        )
    }

}


export default PaymentOptions;