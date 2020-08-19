import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import BodyTag from "./Body";
import Wrapper from "./Wrapper";
import Banner from "./Banner";
import TileA from "./TileA";
import TileB from "./TileB";
import TileC from "./TileC";
import ModifiedTile from "./ModifiedTile";
import AnimatedNavBar from "./AnimatedNavBar";
import CarouselWrapper from "./CarouselWrapper";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import Ticker from "./Ticker";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAsterisk, 
  faCheckSquare, 
  faCoffee, 
  faAngleDoubleDown 
} from '@fortawesome/free-solid-svg-icons';

const bgOne = "https://4.bp.blogspot.com/-oPDJM2wN8Ws/VTy7xDk53FI/AAAAAAAAEPs/r0j9fF0zN0U/s1600/Nature-Scenes-Wallpaper-5.jpg";
const bgTwo = "https://cdn.wallpapersafari.com/5/7/yqe3im.jpg";


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Hi there. Thanks for visiting my React Redux app")
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
            <Link to="/two">
              <CarouselItem opacity={0.7} bg={bgOne} />
            </Link>
            <CarouselItem opacity={0.7} bg={bgTwo} />
          </Carousel>
        </CarouselWrapper>

        <Ticker />
      </BodyTag>
    );
  }
}

export default App;

