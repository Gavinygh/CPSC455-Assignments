import React from "react";

function Navbar(props) {
  return (
    <nav className="Navbar">
      <ul className="nav_list">
        <button
          className="nav_item"
          id="homeButton"
          onClick={() => props.childToParent(true)}
        >
          HOME
        </button>
        <button
          className="nav_item"
          id="aboutButton"
          onClick={() => props.childToParent(false)}
        >
          ABOUT ME
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
