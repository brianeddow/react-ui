import React, { Component } from "react";
import styled from "styled-components";
import CarouselItemOverlay from "./CarouselItemOverlay";
import CarouselOne from "./CarouselOne";
import store from "../store/index";
import toggleState from "../actions/index";
import { Link } from "react-router-dom";

const bgOne = "https://4.bp.blogspot.com/-oPDJM2wN8Ws/VTy7xDk53FI/AAAAAAAAEPs/r0j9fF0zN0U/s1600/Nature-Scenes-Wallpaper-5.jpg";

const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 400px;
	height: 300px;
	color: #000;
	font-size: 57pt;
`;

class CarouselOneWrapper extends Component {

	handleHover = () => {
    store.dispatch(toggleState('carouselOne'));
  }

	render() {
		return (
			<Link to="/two">
				<CarouselItemOverlay onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} >
					<Inner>+</Inner>
				</CarouselItemOverlay>
				<CarouselOne bg={bgOne} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} />
			</Link>
		)
	}
}

export default CarouselOneWrapper;