import React from "react";
import "./UserDropDown.css";
import { Link } from "react-router-dom";

const UserDropDown = props => {
  let userClasses = "userDropDown";

  if (props.show) {
    userClasses = "userDropDown open";
  }

  return (
    <div className={userClasses}>
      <div className="dropdown-user">
        <Link to="/login">Sign In</Link>
        <Link to="/myaccount">My Account</Link>
        <Link to="/">Favorites</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/login">Create an Account</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
};

export default UserDropDown;
