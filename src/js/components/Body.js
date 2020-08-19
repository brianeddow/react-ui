import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const bgUrl = "https://wallpaperstream.com/wallpapers/full/abstract-art/Brown-Black-Abstract-HD-Wallpaper.jpg"

/* "https://wallpaper-house.com/data/out/6/wallpaper2you_106232.jpg"; */

const mapStateToProps = state => {
  return { bgOne: state.bgOne };
}

const Body = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 500ms ease-in-out;
  background: ${props => props.bgOne ? `url(${bgUrl})` : "#d6bb97"};

  ${props => props.bgOne && `
  	background-size: cover;
  	transition: all 500ms ease-in-out;
  `};
`;

const BodyTag = connect(mapStateToProps)(Body);

export default BodyTag;
