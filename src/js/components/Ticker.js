import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import toggleState from "../actions/index";

const mapStateToProps = state => {
	return {
		clock: state.clock
	}
}

const TickerInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e4d2ba;
  font-family: sans-serif;
  font-size: 10pt;
`;

class TickerWrapper extends Component {

	tick() {
		this.props.toggleState("clock")
	}

	componentDidMount() {
		this.interval = setInterval(
	      () => this.tick(), 
	      1000
	    );
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return <TickerInner>{this.props.clock}</TickerInner>
	}
}

const Ticker = connect(mapStateToProps,{ toggleState })(TickerWrapper);

export default Ticker;