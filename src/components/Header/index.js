import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="jumbotron">
        <h1 className="display-4">React Memory Image Game</h1>
        <p className="lead">
          Click on an image to start the game and earn points, but click on the
          same image twice and the game is over.
        </p>
        <p className="score-board">
          <span />
        </p>
      </div>
    </header>
  );
}

export default Header;
