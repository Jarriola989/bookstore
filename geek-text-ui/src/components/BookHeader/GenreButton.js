import React, { Component } from 'react';
import './GenreButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GenreDropDown from './GenreDropDown';

class GenreButton extends Component {
    constructor(props) {
        super(props);
        this.genreMenuToggle = this.genreMenuToggle.bind(this);
        this.state = {genreMenuOpen: false};
    }

    genreMenuToggle = () => {
        this.setState((prevState) => {
            return {genreMenuOpen: !prevState.genreMenuOpen}
        });
    };

    render() {
        const genreMenuOpen = this.state.genreMenuOpen;
        let dropdown;

        if (genreMenuOpen) {
            dropdown = <GenreDropDown />;
        }

        return (
            <div>
                <button className="GenreButton" onClick={this.genreMenuToggle} >Genres</button> 
                {dropdown}  
            </div>
        );
    };
}

export default GenreButton;