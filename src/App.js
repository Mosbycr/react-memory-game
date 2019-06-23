import React, {Component} from "react";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import imageCards from "./imageCards.json";

class App extends Component {
    state = {
        imageCards
    }
//     constructor(props) {
//         super(props);
//         this.state = {
//           imageCards,
//           score: 0,
//           topScore: 0,
//         };
//         //binding event handler to this
//         this.handleClicked = this.handleClicked.bind(this);
//  }

    handleClicked = () => {
        console.log("I have been clicked!")
    }

    render() {
        return (
            <Wrapper>
            <Header />
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