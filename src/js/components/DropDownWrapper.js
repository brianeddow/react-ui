import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dropDown: state.dropDown
  }
}

const DropDown = styled.div`
  z-index: 1000;
  display: ${props => props.dropDown ? 'flex' : 'none'};
  position: absolute;
  align-items: center;
  justify-content: center;
  color: #7e6c54;
  width: 390px;
  height: 0;
  top: 105px;
  border-radius: 2px;
  background: #e4d2ba;
  border: 1px solid #fff;
  transform: translate(0,0);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition-property: height;
  transition: 500ms ease-in-out;

  &:hover ${DropDown} {
    height: 165px;
    opacity: 1;
    transition: 500ms ease-in-out;
  }
`;

const DropDownWrapper = connect(mapStateToProps)(DropDown);

export default DropDownWrapper;
