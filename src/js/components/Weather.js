import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { weather: state.weather };
}

const Wrapper = styled.div`
  display: ${props => props.weather ? "block" : "none"};
  position: absolute;
  top: 30px;
  right: 60px;
  bottom: auto;
  left: 68%;
  height: 100px;
  padding: 7px;
  border: 1px solid #000;
  border-radius: 3px;
  background: #e7b;
`;

const Weather = connect(mapStateToProps)(Wrapper);

export default Weather;