import React from 'react';
import './BookHeader.css';
import GenreButton from './GenreButton';
import SortButton from './SortButton';
import { Link } from 'react-router-dom';


const BookHeader = props => (
    <nav className="book-nav">
        <div className="content"> 
            <GenreButton/> 
            <Link to="/books/top">Top Sellers</Link>
            <Link to="/books/rating">High Rated</Link>
            <SortButton/>
        </div>
        

    </nav>

)



export default BookHeader;