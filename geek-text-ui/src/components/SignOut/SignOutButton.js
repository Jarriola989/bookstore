import React, { Component } from 'react';
import './SignOutButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom'

class SignOutButton extends Component {

    handleLogout = () => {
        this.props.logout();
        
        return <Redirect to='/login' />
    }

    render(){
        return(
            <div>
                <button onClick={this.handleLogout}
                className="signout-btn"><FontAwesomeIcon icon={faSignOutAlt}/></button>
        
            </div>
        );
    };
    
}

export default SignOutButton;