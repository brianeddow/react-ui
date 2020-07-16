import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import { myFrames, socialsFrames } from "./Keyframes";
import { MyIcon } from "./MyIcon";
import BodyTag from "./Body";
import AnimatedNavBar from "./AnimatedNav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faCheckSquare, faCoffee, 
         faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

// #d6bb97
const niceClr = "#ff7c7c";

const Wrapper = styled.div`
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
  width: 400px;
  height: 50px;
  color: ${props => props.extras ?
           `${niceClr}` : 
           "#7e6c54"
  };
  border-radius: 2px;
  background: ${props => props.extras ?
                `${niceClr}` : 
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

const ModifiedTile = styled.div`
  display: ${props => props.socials ? 
             "flex" :
             "none"
  };
  align-items: center;
  justify-content: space-around;
  padding-top: 0;
  width: 400px;
  border: 0;
  background: transparent;
  animation: ${socialsFrames} 200ms ease 0s 1;
`;

const Ticker = styled.p`
  position: fixed;
  bottom: 0;
  left: 44.9%;
  color: #e4d2ba;
  font-family: sans-serif;
  font-size: 10pt;
`;

class Form extends Component {
  state = {
    dropDown: false,
    bgOne: false,
    moveNav: false,
    extras: false,
    socials: false,
    /* end core state */
    clock: new Date().toLocaleString()
  }

  tick() {
    this.setState({
      clock: new Date().toLocaleString()
    })
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.tick(), 
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onMouseEnter = () => this.setState({ dropDown: true });
  onMouseLeave = () => this.setState({ dropDown: false });
  handleBg = () => this.setState({ bgOne: !this.state.bgOne });
  handleNav = () => this.setState({ moveNav: !this.state.moveNav });
  handleExtras = () => this.setState({ extras: !this.state.extras });
  handleSocials = () => this.setState({ socials: !this.state.socials });

  render() {
    return (
      <BodyTag bgOne={this.state.bgOne} >
        <Wrapper moveNav={this.state.moveNav} >
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
          <Tile onClick={this.handleSocials} extras={this.state.extras} >
            <FontAwesomeIcon icon={faCoffee} />
          </Tile>

          <ModifiedTile socials={this.state.socials} >
            <MyIcon name="instagram" clock={this.state.clock} />
            <MyIcon name="facebook" />
            <MyIcon name="twitter" />
          </ModifiedTile>
        </Wrapper>

        <Ticker>{this.state.clock}</Ticker>
      </BodyTag>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
