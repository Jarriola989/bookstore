import React from "react";
import { Link } from 'react-router-dom';
import "./SidePanel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SidePanel = props => {
  let panelClasses = "sidePanel";

  if (props.show) {
    panelClasses = "sidePanel open";
  }
  return (
    <nav className={panelClasses}>
      <button className="closePanelButton">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/books">Books</Link>
      <Link to="/">Summer Specials</Link>
      <Link to="/">Contact</Link>
    </nav>
  );

};

export default SidePanel;
