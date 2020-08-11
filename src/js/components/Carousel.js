import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		moveCarouselLeft: state.moveCarouselLeft
	}
}

const CarouselInner = styled.div`
  display: block;
  width: 300%;
  height: 100%;
  transition: 1s;

  ${props => props.moveCarouselLeft && `
    transform: translate(-401px);
    transition: 1s;
  `}
`;

const Carousel = connect(mapStateToProps)(CarouselInner);

export default Carousel;