import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import toggleState from "../actions/index";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

const hoverClr = "#ff7c7c";

const mapStateToProps = state => {
  return { 
    extras: state.extras,
    bgOne: state.bgOne 
  }
}

const TileInner = styled.div`
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
  width: 400px;
  height: 50px;
  color: ${props => props.extras ? `${hoverClr}` : "#7e6c54"};
  background: ${props => props.extras ? `${hoverClr}` : "#fff"};
  border-radius: 2px;
  transition: transform 130ms ease-out;

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
        console.log(this.props.bgOne)
      }} >
        <FontAwesomeIcon icon={faAsterisk} />
      </TileInner>
    );
  }
}

const Tile = connect(mapStateToProps, { toggleState })(TileComponent);

export default Tile;