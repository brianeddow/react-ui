import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dropDown: state.dropDown
  }
}

const IconInner = styled.span`
  display: ${props => props.dropDown ? "flex" : "none"};
  align-items: space-around;
  justify-content: center;
  width: 200px;
  transition: 250ms ease-out;
  transform: translate(0);

  &:hover ${IconInner} {
    transform: translate(-3px,-2px);
    transition: 150ms ease-in;
    filter: drop-shadow(5px 9px 6px #2a241c);
  }
`;

const Icon = connect(mapStateToProps)(IconInner);

export default Icon;