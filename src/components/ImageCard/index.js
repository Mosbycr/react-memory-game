import React from "react";
// import "./style.css";

function ImageCard(props){
return (
  <div className="card">
    <div className="img-container">
      <img
        alt={"This is image " + props.id}
        src={props.image}
        // onClick={() => props.checkIfClicked(props.id)}
      />
    </div>
  </div>
);
}

export default ImageCard