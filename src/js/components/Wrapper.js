import React, { Component } from "react";
import styled, { css } from "styled-components";
import { connect } from "react-redux";
import { myFrames } from "./Keyframes";

const mapStateToProps = state => {
  return {
    moveNav: state.moveNav
  }
}

const Wrap = styled.div`
  display: block;
  margin: 0 auto;
  padding-top: 100px;
  width: 400px;
  height: 210px;
  background: transparent;

  ${props => props.moveNav && css`
    animation: ${myFrames} 150ms ease-in-out 0s 5;
    transition: 100ms ease-out;
  `}
`;

const Wrapper = connect(mapStateToProps)(Wrap);

export default Wrapper;