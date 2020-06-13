import React, { Component } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'theme-provider';

const WhiteBox = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.color};
  width: 392px;
  height: 172px;
  background: #e4d2ba;
  border: 1px solid #fff;
  opacity: 0;
  transition: opacity 250ms ease-out;

  &:hover {
    transition: 250ms ease-out;
    opacity: .9;
  }
`;

const theme = {
  color: "red"
};

class AnimatedNavBar extends Component {
  state = {
    shown: false
  };

  render() {
    return (
      <WhiteBox onMouseLeave={this.props.mouseLeave}>
        <p>lovely</p>
      </WhiteBox>
    );
  }
}

export default AnimatedNavBar;