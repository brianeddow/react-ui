import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import toggleState from "../actions/index";
import App from "./App";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const hoverClr = "#ff7c7c";

const mapStateToProps = state => {
  return { 
    extras: state.extras,
    socials: state.socials 
  }
}

const TileInner = styled.div`
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
  margin-left: 3px;
  width: 396px;
  height: 50px;
  color: ${props => props.extras ? `${hoverClr}` : "#7e6c54"};
  background: ${props => props.extras ? `${hoverClr}` : "#fff"};
  border-radius: 2px;
  transition: transform 130ms ease-out;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover ${TileInner} {
    transform: translate(-3px,-1px);
    background: #faf7f3;
    border-bottom: 1px solid #544838;
    border-right: 1px solid #e4d2ba;
  }
`;

class TileComponent extends Component {

  render() {
    let id = this.props.id;

    return (
      <TileInner onClick={() => {
        this.props.toggleState(id);
      }} >
        <FontAwesomeIcon icon={faCoffee} />
      </TileInner>
    );
  }
}

const Tile = connect(mapStateToProps,{ toggleState })(TileComponent);

export default Tile;