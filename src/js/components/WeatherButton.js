import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import toggleState from "../actions/index";
import store from "../store/index";


const mapStateToProps = state => {
  return { weather: state.weather };
}

const Icon = styled.div`
  display: none;
  z-index: 9000;
  position: absolute;
  top: 0;
  right: 60px;
  height: 20px;
  width: 400px;
  border: 1px solid #000;
  background: pink;
`;

class Wrapper extends Component {

  handleHover = () => {
    store.dispatch(toggleState('weather'))
    console.log('weather')
  }

  render() {
    return (
      <Icon onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} />
    )
  }
}

const WeatherButton = connect(mapStateToProps)(Wrapper);

export default WeatherButton