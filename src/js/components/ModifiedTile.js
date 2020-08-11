import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import { MyIcon } from "./MyIcon";
import ModifiedTileInner from "./ModifiedTileInner";

const mapStateToProps = state => {
  return {
    socials: state.socials
  }
}

class ModifiedTileWrapper extends Component {

  render() {
    return (
      <ModifiedTileInner>
        <MyIcon name="instagram" />
        <MyIcon name="facebook" />
        <MyIcon name="twitter" />
      </ModifiedTileInner>
    )
  }
}

const ConnectedTile = connect(mapStateToProps)(ModifiedTileWrapper);

export default ConnectedTile;