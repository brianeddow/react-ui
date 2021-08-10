import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import toggleState from "../actions/index";
import _ from "lodash";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const HOVER_CLR = "#ff7c7c";

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
  margin-top: 2px;
  margin-bottom: 3px;
  margin-left: 5px;
  width: 396px;
  height: 50px;
  color: ${props => props.extras ? `${HOVER_CLR}` : "#7e6c54"};
  background: ${props => props.extras ? `${HOVER_CLR}` : "#fff"};
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

const TileComponentC = (props) => {
  let id = props.id;

  return (
    <TileInner onClick={_.debounce(() => {
      props.toggleState(id);
    }, 250)} >
      <FontAwesomeIcon icon={faCoffee} />
    </TileInner>
  );
}

TileComponentC.defaultProps = { id: "socials" };

const Tile = connect(mapStateToProps,{ toggleState })(TileComponentC);

export default Tile;