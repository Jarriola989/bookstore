import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SidePanelButton from '../PanelButton/SidePanelButton';
import UserButton from '../UserMenu/UserButton';
import SignOutButton from '../SignOut/SignOutButton';
import { textAlign } from '@material-ui/system';


const Header = props => (
    <nav className="navigation">
    
        <SidePanelButton />   
        <div style={{right: '0', position: 'absolute', padding: '50px', paddingBottom: '100px', color: 'rgb(0, 151, 189)'}}>Hello, {props.loggedInStatus}</div>
        <div className="navcontent"> 
            <Link to="/">GeekText</Link>
            <Link to="/">About</Link>
            <Link to="/books">Books</Link>
            <Link to="/">Summer Specials</Link>
            <Link to="/">Contact</Link>
        </div>
        
        <div className="usercontent">    
          <UserButton />
          <SignOutButton logout={props.handleLogoutStatus} />
        </div>

    </nav>

)


export default Header;