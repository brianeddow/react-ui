import React, { Component } from "react";
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
import CarouselItem from "./CarouselItem";
import Carousel from "./Carousel";
import Ticker from "./Ticker";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAsterisk, 
  faCheckSquare, 
  faCoffee, 
  faAngleDoubleDown 
} from '@fortawesome/free-solid-svg-icons';

/* 
 * for testing purposes, easier to comment out */

//import { toggleState } from "../actions/index";
//import store from "../store/index";

/* Copyright 2020 Wallpaper Safari */
const bgTwo = "https://cdn.wallpapersafari.com/5/7/yqe3im.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.bgTwo = bgTwo;
    this.state = {
      bacon: null
    }
  }

  componentDidMount() {
    console.log("Hi there. Thanks for visiting my React Redux app.")
    this.getBacon()
  }

  async getBacon() {
    let response = await fetch('https://baconipsum.com/api/?callback=?');
    let data = await response.json()
    this.setState({ bacon: data.join(' ') })
  }

  render() {
    return (
      <BodyTag>
        <Wrapper>
          <Banner />
          <TileA id="bgOne" />
          <TileB id="moveCarouselLeft" />
          <TileC id="socials" />

          <ModifiedTile />
        </Wrapper>

        <CarouselWrapper>
          <Carousel>
            <CarouselOneWrapper />
            <CarouselItem bg={this.bgTwo} />
          </Carousel>
        </CarouselWrapper>

        <Ticker />
      </BodyTag>
    );
  }
}

export default App;
