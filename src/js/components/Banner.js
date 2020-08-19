import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import toggleState from "../actions/index";
import AnimatedNavBar from "./AnimatedNavBar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = state => {
  return {
    dropDown: state.dropDown
  }
}

const BannerInner = styled.div`
  z-index: 200;
  margin: 0 auto;
  width: 392px;
  height: 30px;
  text-align: center;
  padding: 3px;
  margin-bottom: 5px;
  color: #544838;
  border: 1px solid #7e6c54;
  border-radius: 2px;
  background: linear-gradient(#d2b48c, #a89070);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

class BannerWrapper extends Component {

  handleMouseToggle = () => {
    this.props.toggleState("dropDown");
  }

  render() {
    return (
      <BannerInner 
        onMouseEnter={this.handleMouseToggle}
        onMouseLeave={this.handleMouseToggle} 
      >
        <FontAwesomeIcon icon={faAngleDoubleDown} />
        <AnimatedNavBar onMouseLeave={this.handleMouseToggle} />
      </BannerInner>
    )
  }
}

const Banner = connect(mapStateToProps,{ toggleState })(BannerWrapper);

export default Banner;