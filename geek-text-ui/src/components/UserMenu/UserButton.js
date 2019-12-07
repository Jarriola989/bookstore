import React, { Component } from 'react';
import './UserButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import UserDropDown from './UserDropDown';

class UserButton extends Component {
    constructor(props) {
        super(props);
        this.userMenuToggle = this.userMenuToggle.bind(this);
        this.state = {userMenuOpen: false};
    }

    userMenuToggle = () => {
        this.setState((prevState) => {
            return {userMenuOpen: !prevState.userMenuOpen}
        });
    };

    render() {
        const userMenuOpen = this.state.userMenuOpen;
        let dropdown;

        if (userMenuOpen) {
            dropdown = <UserDropDown />;
        }

        return (
            <div>
                <button className="UserButton" onClick={this.userMenuToggle} ><FontAwesomeIcon icon={faUser}/></button> 
                {dropdown}  
            </div>
        );
    };
}

export default UserButton;