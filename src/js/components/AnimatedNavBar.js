import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faImage, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import DropDownWrapper from "./DropDownWrapper";
import Icon from "./Icon";

class AnimatedNavBar extends Component {
  
  size = "2x";

  render() {
    return (
      <DropDownWrapper>
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
            icon={faPowerOff} 
            size={this.size} 
          />
        </Icon>
      </DropDownWrapper>
    );
  }
}

export default AnimatedNavBar;
