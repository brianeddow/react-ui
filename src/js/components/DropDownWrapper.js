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
  position: relative;
  top: 0;
  left: 6px;
  align-items: center;
  justify-content: center;
  color: #7e6c54;
  width: 392px;
  height: 165px;
  margin-bottom: 5px;
  border-radius: 2px;
  background: #e4d2ba;
  border: 1px solid #fff;
  transform: translate(0,0);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  transition-property: height;
  transition: 500ms ease-in-out;
  transform: rotateX(-5deg);

  &:hover ${DropDown} {
    opacity: 1;
    transition: 150ms ease-in-out;
    tranform: rotateX(0deg);
  }
`;

const DropDownWrapper = connect(mapStateToProps)(DropDown);

export default DropDownWrapper;
