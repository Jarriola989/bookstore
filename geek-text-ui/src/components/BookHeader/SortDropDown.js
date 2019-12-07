import React from 'react';
import './SortDropDown.css';


const SortDropDown = props => {
    let sortClasses = 'sortDropDown';

    if(props.show) {
        sortClasses = 'sortDropDown open';
    }

    return (
        <div className={sortClasses}>
            <div className="dropdown-sort">
                <a href = "/books">Book Title</a>
                <a href = "/books" >Author</a>
                <a href = "/books">Price</a>
                <a href = "/books">Book Rating</a>
                <a href = "/books" >Release date</a>
            </div>
        </div>
    );
};


export default SortDropDown;