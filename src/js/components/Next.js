import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import store from "../store/index";
import toggleState from "../actions/index";

const NextOuter = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0
	display: flex;
	z-index: 1200;
	background: #eee;
`;

const NextInner = styled.div`
	display: inline-block;
	width: 100vw;
	margin: 20vh auto;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FloatingTile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 450px;
	height: 250px;
	border: 0;
	color: #000;
	background: #fff;
	filter: drop-shadow(0 0 0.75rem #aaa);
`;

const Tools = [
	"React",
	"React-Redux",
	"React Router",
	"Styled Components",
	"Jest"
];

const liStyle = {
	'list-style-type': 'none',
	'text-align': 'center',
	'margin-left': '-30px',
	'line-height': '30px',
	'font-color': '#000'
};

const LinkStyle = {
	'text-decoration': 'none'
};

class NextPage extends Component {

	resetOverlay = () => {
		store.dispatch(toggleState('carouselOne'));
	}

	render() {
		return (
			<NextOuter>
				<NextInner>
					<FloatingTile>
						<ul style={liStyle}>
						{Tools.map(tool => <li>{tool}</li>)}
						</ul>
					</FloatingTile>
				</NextInner>
				<NextInner onClick={this.resetOverlay()}>
					<Link to="/" style={LinkStyle}>Back</Link>
				</NextInner>
			</NextOuter>
		)
	}
}

export default NextPage;