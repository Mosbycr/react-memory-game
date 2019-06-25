import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import imageCards from "./imageCards.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCards,
      score: 0,
      topScore: 0
    };
    //binding event handler to this
    this.handleClicked = this.handleClicked.bind(this);
    // this.shuffle = this.shuffle.bind(this)
  }

  shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // method to check the clicked image
  //pass through the current prop.id
  handleClicked = id => {
    // console.log(score, topScore);
    console.log("I have been clicked!");
    //going through JSON to find the information that matched the current id with id first using index 0 as it is written is JSON
    let clickedImage = this.state.imageCards.filter(
      image => image.id === id
    )[0];
    //grabs all objects in JSON with clicked = true
    let allClickedImages = this.state.imageCards.filter(image => image.clicked === true);
    console.log(clickedImage);

    //check if image has been clicked first time and set clicked to false
    if (!clickedImage.clicked) {
      clickedImage.clicked = true;
      // let shuffledImages = this.shuffle(imageCards);
      this.shuffle(imageCards);
      console.log(" this is after shuffle: ", imageCards);
      // console.log(shuffledImages);

      //updating score and topscore as user plays
      this.setState({
        // imageCards: shuffledImages,
        score: this.state.score + 1,
        topScore:
          this.state.score + 1 > this.state.topScore
            ? this.state.score + 1
            : this.state.topScore
      });

      //if player has clicked all 12 images once set score back to 0 and reset game
      console.log(this.state.score);
      if(this.state.score === 11){
          this.setState({
              score: 0,
          })

           allClickedImages.forEach(image => {
             image.clicked = false;
           });
      }
      //if image has been clicked twice set all image's clicked back to false and score to 0
    } else {
        console.log(allClickedImages);
        allClickedImages.forEach(image => {
            image.clicked = false;
        });
        // console.log("This is after all turned false: ", imageCards);
        this.setState({
          score: 0,
        //   imageCards: imageCards,
        });
        console.log("This is json after reset: ", imageCards);
    }
  };

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} topScore={this.state.topScore} />
        {this.state.imageCards.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            image={image.image}
            clicked={this.checkifClicked}
            handleClicked={this.handleClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
