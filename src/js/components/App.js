import React, { Component } from "react";
import axios from "axios";
import BodyTag from "./Body";
import Wrapper from "./Wrapper";
import Banner from "./Banner";
import TileA from "./TileA";
import TileB from "./TileB";
import TileC from "./TileC";
import ModifiedTile from "./ModifiedTile";
import AnimatedNavBar from "./AnimatedNavBar";
import CarouselWrapper from "./CarouselWrapper";
import CarouselOneWrapper from "./CarouselOneWrapper";
import CarouselTwoWrapper from "./CarouselTwoWrapper";
import Carousel from "./Carousel";
import Ticker from "./Ticker";
import Weather from "./Weather";
import WeatherButton from "./WeatherButton";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAsterisk, 
  faCheckSquare, 
  faCoffee, 
  faAngleDoubleDown 
} from '@fortawesome/free-solid-svg-icons';


//import { toggleState } from "../actions/index";
//import store from "../store/index";


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { bacon: null }
  }

  componentDidMount() {
    console.log("Hi there. Thanks for visiting my React app.")
    this.getBacon()
  }

  async getBacon() {
    let response = await axios('https://baconipsum.com/api/?callback=?');
    this.setState({ bacon: response.data })
  }

  render() {
    return (
      <BodyTag>
        <WeatherButton />
        <Weather>
          {this.state.bacon}
        </Weather>

        <Wrapper>
          <Banner />
          <TileA />
          <TileB />
          <TileC />

          <ModifiedTile />
        </Wrapper>

        <CarouselWrapper>
          <Carousel>
            <CarouselOneWrapper />
            <CarouselTwoWrapper />
          </Carousel>
        </CarouselWrapper>

        <Ticker />
      </BodyTag>
    );
  }
}

export default App;
