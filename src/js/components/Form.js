import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import AnimatedNavBar from "./AnimatedNav";
import BodyTag from "./Body";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  padding-top: 100px;
  width: 400px;
  height: 210px;
  background: transparent;
`;

const Banner = styled.div`
  z-index: 400;
  margin: 0 auto;
  width: 394px;
  height: 30px;
  text-align: center;
  padding: 3px;
  margin-bottom: 5px;
  color: #544838;
  background: #a89070;
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
  color: #7e6c54;
  background: #fff;
  transition: transform 130ms ease-out;

  &:hover {
    transform: translateY(-1.2px);
    background: #faf7f3;
  }
`;

const Paragraph = styled.p`
  display: block;
`;

class Form extends Component {
  state = {
    shown: false
  }

  onMouseEnter = () => {
    this.setState({
      shown: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      shown: false
    });
  };

  render() {
    return (
      <BodyTag>
        <Wrapper>
          <Banner onMouseEnter={this.onMouseEnter} >
            Hover Me
            {this.state.shown && 
              <AnimatedNavBar mouseLeave={this.onMouseLeave} />}
          </Banner>
          <Tile>
            <FontAwesomeIcon icon={faAsterisk} />
          </Tile>
          <Tile>
            <FontAwesomeIcon icon={faCheckSquare} />
          </Tile>
          <Tile>
            <FontAwesomeIcon icon={faCoffee} />
          </Tile>
        </Wrapper>
      </BodyTag>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;