import React from "react";

function Header(props) {
  return (
    <header className="header">
      <div className="jumbotron">
        <h1 className="display-4">React Memory Image Game</h1>
        <p className="lead">
          Click on an image to start the game and earn points, but click on the
          same image twice and the game is over.
        </p>
        <p className="score-board">
          <span id="scoreCount">Score: </span> 
          {/* add in score props in Score  */}
        </p>
      </div>
    </header>
  );
}

export default Header;
