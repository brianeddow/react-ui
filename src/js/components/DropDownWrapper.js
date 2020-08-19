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
  align-items: center;
  justify-content: center;
  color: #7e6c54;
  width: 390px;
  height: 172px;
  border-radius: 2px;
  background: #e4d2ba;
  border: 1px solid #fff;
  opacity: .99;
  transform: translate(0);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const DropDownWrapper = connect(mapStateToProps)(DropDown);

export default DropDownWrapper;