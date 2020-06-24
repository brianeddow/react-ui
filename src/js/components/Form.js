import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import BodyTag from "./Body";
import AnimatedNavBar from "./AnimatedNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faCheckSquare, faCoffee, 
         faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

// #d6bb97

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  padding-top: 100px;
  width: 400px;
  height: 210px;
  background: transparent;
`;

const Banner = styled.div`
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
`;

const Tile = styled.div`
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
  text-align: center;
  width: 400px;
  height: 50px;
  color: ${props => props.extras ? // temp behavior
           "#ff7c7c" : 
           "#7e6c54"
  };
  border-radius: 2px;
  background: ${props => props.extras ? // temp behavior
                "#ddd" : 
                "#fff"
  };
  transition: transform 130ms ease-out;

  &:hover ${Tile} {
    transform: translate(-3px,-1px);
    background: #faf7f3;
    border-bottom: 1px solid #544838;
    border-right: 1px solid #e4d2ba;
  }
`;

class Form extends Component {
  state = {
    dropDown: false,
    bgOne: false,
    moveNav: false,
    extras: false
  }

  onMouseEnter = () => this.setState({ dropDown: true });
  onMouseLeave = () => this.setState({ dropDown: false });
  handleBg = () => this.setState({ bgOne: !this.state.bgOne });
  handleNav = () => this.setState({ moveNav: !this.state.moveNav });
  handleExtras = () => this.setState({ extras: !this.state.extras });

  render() {
    return (
      <BodyTag bgOne={this.state.bgOne} moveNav={this.state.moveNav} >
        <Wrapper>
          <Banner onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
            <FontAwesomeIcon icon={faAngleDoubleDown} />
            {this.state.dropDown && (
              <AnimatedNavBar mouseLeave={this.onMouseLeave} />
            )}
          </Banner>
          <Tile onClick={this.handleBg} >
            <FontAwesomeIcon icon={faAsterisk} />
          </Tile>
          <Tile onClick={this.handleNav} >
            <FontAwesomeIcon icon={faCheckSquare} />
          </Tile>
          <Tile onClick={this.handleExtras} extras={this.state.extras} >
            <FontAwesomeIcon icon={faCoffee} />
          </Tile>
        </Wrapper>
      </BodyTag>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
