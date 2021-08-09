import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import toggleState from "../actions/index";
import _ from "lodash";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const hoverClr = "#ff7c7c";

const mapStateToProps = state => {
  return { 
    extras: state.extras,
    moveCarouselLeft: state.moveCarouselLeft,
    hoverClr: hoverClr
  }
}

const TileInner = styled.div`
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3px;
  margin-left: 5px;
  width: 396px;
  height: 50px;
  color: ${props => props.extras ? `${this.propshoverClr}` : "#7e6c54"};
  background: ${props => props.extras ? `${this.props.hoverClr}` : "#fff"};
  border-radius: 2px;
  transition: transform 130ms ease-out;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover ${TileInner} {
    transform: translate(-1px,-1px);
    background: #faf7f3;
    border-bottom: 1px solid #544838;
    border-right: 1px solid #e4d2ba;
  }
`;

const TileComponentB = (props) => {
  let id = props.id;

  return (
    <TileInner onClick={_.debounce(() => {
      props.toggleState(id);
    }, 800)} >
      <FontAwesomeIcon icon={faCheckSquare} />
    </TileInner>
  );
}

TileComponentB.defaultProps =  { id: "moveCarouselLeft" };

const Tile = connect(mapStateToProps, { toggleState })(TileComponentB);

export default Tile;