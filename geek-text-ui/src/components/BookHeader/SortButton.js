import React, { Component } from 'react';
import './SortButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SortDropDown from './SortDropDown';

class SortButton extends Component {
    constructor(props) {
        super(props);
        this.sortMenuToggle = this.sortMenuToggle.bind(this);
        this.state = {sortMenuOpen: false};
    }

    sortMenuToggle = () => {
        this.setState((prevState) => {
            return {sortMenuOpen: !prevState.sortMenuOpen}
        });
    };

    render() {
        const sortMenuOpen = this.state.sortMenuOpen;
        let dropdown;

        if (sortMenuOpen) {
            dropdown = <SortDropDown />;
        }

        return (
            <div>
                <button className="SortButton" onClick={this.sortMenuToggle} >Sort by</button> 
                {dropdown}  
            </div>
        );
    };
}

export default SortButton;