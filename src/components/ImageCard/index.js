import React from "react";
import "./index.css";

function ImageCard(props){
return (
  <div className="cardWrap">
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="img-container">
            <img
              alt={"This is image " + props.id}
              src={props.image}
              onClick= {props.handleClicked}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default ImageCard