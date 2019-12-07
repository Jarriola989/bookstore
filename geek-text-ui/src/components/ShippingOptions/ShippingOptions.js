import React, { Component } from 'react';
import AddShipping from './AddShipping';
import './ShippingOptions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class ShippingOptions extends Component {
    state = {
        addresses : [],
        loading: true,
        error: null
    };

    async componentDidMount(){
        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;
        const shipping = "/shipping/";
        fetch(url+currentUser+shipping).then(res=> {
            if(res.ok){
                return res.json();
            }else{
                throw Error("Error getting shipping addresses!")
            }
        }).then(addresses => {
            this.setState({addresses:addresses, loading:false});
        }).catch(error => this.setState({error:error}))
    }

    addShipping = (address) => {
        let addresses = [...this.state.addresses, address];
        this.setState({
            addresses: addresses
        })
    }

    deleteShipping = (id) => {
        const url = "http://localhost:8090/api/users/";
        var currentUser = this.props.currentUser;
        const shipping = "/shipping/";

        if(window.confirm('Are you sure you want to permanently delete?')){
            let addresses = this.state.addresses.filter(address => {
                return address.id !== id
            });
            this.setState({
                addresses: addresses
            })
            fetch(url+currentUser+shipping+id,{
                method: 'delete',
                headers: { "Content-Type": "application/json; charset=UTF-8" }
            })
        }
        
    }

    render() {
        const { addresses } = this.state;
        const addresslist = addresses.map(address => {
            return (
            <div className="options">   
                <div key={address.id}>
                    <div>Address Name: {address.nickname}</div>
                    <div>Address: {address.address}</div>
                </div>
                <div>
                    <button className="delete-btn" onClick={() => {this.deleteShipping(address.id)}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div> 
            )
        })
        return (
            <div>
                { addresslist }
                <AddShipping addShipping={this.addShipping} currentUser={this.props.currentUser} />
            </div>
        )
    }

}


export default ShippingOptions;