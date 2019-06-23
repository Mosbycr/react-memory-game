import React, {Component} from "react";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import imageCards from "./imageCards.json";

class App extends Component {
    // state = {
    //     imageCards
    // }
    constructor(props) {
        super(props);
        this.state = {
          imageCards,
          score: 0,
          topScore: 0,
        };
        //binding event handler to this
        this.handleClicked = this.handleClicked.bind(this);
    }
    
    // method to check the clicked image 
    //pass through the current prop.id
    handleClicked = (id) => {
        // console.log(score, topScore);
        console.log("I have been clicked!")
        //going through JSON to find the information that matched the current id with id first using index 0 as it is written is JSON
        let clickedImage = this.state.imageCards.filter(image => image.id === id)[0];
        console.log(clickedImage);

        if(!clickedImage.clicked){
            clickedImage.clicked = true;
            console.log(clickedImage);

            this.setState ({
                score: this.state.score + 1,
                topScore: (this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore),
            })
            // console.log(score, topScore);
        }
    }

    render() {
        return (
            <Wrapper>
            <Header score={this.state.score}topScore={this.state.topScore}/>
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
        )
    }
}

export default App;