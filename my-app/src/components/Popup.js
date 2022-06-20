import React from "react";
export default function PopUp(props) {
  const handleClick = () => {
   props.toggle();
  };
  
  return (
   <div className="Popup">
     <div className="Popup_content">
     <span className="close" onClick={handleClick}>&times;</span>
     <p> 
        Name: {props.name}
        <br />
        Instructions: {props.instructions}
     </p>
    </div>
   </div>
  );
 }