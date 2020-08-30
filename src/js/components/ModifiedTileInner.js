import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

const socialsFrames = keyframes`
  0% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
`;

const mapStateToProps = state => {
  return {
    socials: state.socials
  }
}

const ModifiedTile = styled.div`
  display: ${props => props.socials ? "flex" : "none"};
  position: absolute;
  z-index: 600;
  align-items: center;
  justify-content: space-around;
  padding-top: 0;
  width: 400px;
  border: 0;
  background: transparent;
  animation: ${socialsFrames} 200ms ease-in-out;
  transform: translate(0);
`;

const ModifiedTileInner = connect(mapStateToProps)(ModifiedTile);

export default ModifiedTileInner;