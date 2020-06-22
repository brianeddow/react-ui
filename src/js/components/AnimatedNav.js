import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faImage, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const WhiteBox = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7e6c54;
  width: 390px;
  height: 172px;
  border-radius: 2px;
  background: #e4d2ba;
  border: 1px solid #fff;
  opacity: .99;
  transition: opacity 450ms ease-out;

  &:hover {
    transition: opacity 450ms ease-out;
    opacity: .99;
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: space-around;
  justify-content: center;
  width: 200px;
  transition: 250ms ease-out;

  &:hover ${Icon} {
    transform: translate(-3px,-2px);
    transition: 150ms ease-in;
    filter: drop-shadow(5px 9px 6px #2a241c);
  }
`;


class AnimatedNavBar extends Component {
  state = {
    shown: false
  };

  size = "2x";

  render() {
    return (
      <WhiteBox onMouseLeave={this.props.mouseLeave}>
        <Icon>
          <FontAwesomeIcon 
            icon={faInbox} 
            size={this.size} 
          />
        </Icon>
        <Icon>
          <FontAwesomeIcon 
            icon={faImage} 
            size={this.size}  
          />
        </Icon>
        <Icon>
          <FontAwesomeIcon 
            icon={faArrowCircleUp} 
            size={this.size} 
          />
        </Icon>
      </WhiteBox>
    );
  }
}

export default AnimatedNavBar;