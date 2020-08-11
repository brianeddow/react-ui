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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAsterisk, 
  faCheckSquare, 
  faCoffee, 
  faAngleDoubleDown 
} from '@fortawesome/free-solid-svg-icons';

import store from "../../js/store/index.js";
import toggleState from "../../js/actions/index.js";

window.store = store;
window.toggleState = toggleState;

class App extends Component {
  constructor(props) {
    super(props);
  }

  /*
  onMouseEnter = () => this.setState({ dropDown: true });
  onMouseLeave = () => this.setState({ dropDown: false });
  handleBg = () => this.setState({ bgOne: !this.state.bgOne });
  handleNav = () => this.setState({ moveNav: !this.state.moveNav });
  handleExtras = () => this.setState({ extras: !this.state.extras });
  handleSocials = () => this.setState({ socials: !this.state.socials });
  moveCarouselLeft = () => this.setState({ moveCarouselLeft: !this.state.moveCarouselLeft });
  */

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
            <CarouselItem opacity={0.5} bg={`http://4.bp.blogspot.com/-oPDJM2wN8Ws/VTy7xDk53FI/AAAAAAAAEPs/r0j9fF0zN0U/s1600/Nature-Scenes-Wallpaper-5.jpg`} />
            <CarouselItem opacity={0.5} bg={`https://cdn.wallpapersafari.com/5/7/yqe3im.jpg`} />
          </Carousel>
        </CarouselWrapper>

        <Ticker />
      </BodyTag>
    );
  }
}

export default App;

/*
const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
*/
