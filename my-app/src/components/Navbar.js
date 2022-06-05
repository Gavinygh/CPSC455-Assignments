import React from "react";

function Navbar(props) {
  return (
    <nav>
      <span>
        <button
          className="nav_button"
          id="homeButton"
          onClick={() => props.childToParent(true)}
        >
          HOME
        </button>
        <button
          className="nav_button"
          id="aboutButton"
          onClick={() => props.childToParent(false)}
        >
          ABOUT ME
        </button>
      </span>
    </nav>
  );
}

export default Navbar;
