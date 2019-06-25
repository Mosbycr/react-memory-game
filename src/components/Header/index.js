import React from "react";
import "./index.css";

function Header(props) {
  return (
    <header className="header">
      <div className="jumbotron">
        <h1 className="display-4">React Memory Image Game</h1>
        <p className="lead">
          <em>Click on an image to start the game and earn points, but click on the
          same image twice and the game is over. <br/> Keep trying to get all 12 images!</em>
        </p>
        <p className="score-board">
         <b> Score: {props.score}   |   TopScore: {props.topScore} </b>
        </p>
      </div>
    </header>
  );
}

export default Header;
