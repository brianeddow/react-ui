import React, { Component } from "react";
import styled from "styled-components";
import CarouselItemOverlay from "./CarouselItemOverlay";
import CarouselOne from "./CarouselOne";
import store from "../store/index";
import toggleState from "../actions/index";
import { Link } from "react-router-dom";


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
				<CarouselOne bg={"../../src/media/carouselTwoImage.png"} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} />
			</Link>
		)
	}
}

export default CarouselOneWrapper;
