import React, {Component} from "react";
import ImageCard from "./components/ImageCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import imageCards from "./imageCards.json";

class App extends Component {
    state = {
        imageCards
    };

    render() {
        return (
            <Wrapper>
            <Header />
                {this.state.imageCards.map(image => (
                    <ImageCard 
                    id={image.id}
                    key={image.id}
                    image={image.image}
                    clicked={image.clicked}
                    />

                ))}
            </Wrapper>
        )
    }
}

export default App;