import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import store from "../store/index";
import toggleState from "../actions/index";
import { Quicksand } from "../../css/index.css";

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
	display: block;
	width: 100vw;
	margin: 20vh auto;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FloatingTile = styled.div`
	position: relative;
	z-index: 100;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	user-select: none;
	width: 450px;
	height: 350px;
	border: 0;
	font-family: "Quicksand", sans-serif;
	font-size: 10pt;
	font-weight: 100;
	letter-spacing: 2px;
	text-decoration: underline;
	color: #000;
	background: #fff;
	filter: drop-shadow(0 0 0.75rem #aaa);
`;

const ImageTile = styled.div`
	position: relative;
	z-index: 200;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	user-select: none;
	width: 450px;
	height: 350px;
	border: 0;
	color: #000;
	background: transparent;
`;

const Tools = [
	"REACT",
	"REACT-REDUX",
	"REACT ROUTER",
	"STYLED COMPONENTS",
	"JEST"
];

const liStyle = {
	'listStyleType': 'none',
	'textAlign': 'center',
	'marginLeft': '-30px',
	'lineHeight': '60px',
	'fontColor': '#000'	
};

const linkStyle = {
	'text-decoration': 'none',
	'color': '#fff'
};

const imgStyle = {
	'width': '450px',
	'height': '350px'
};

const style = {
	liStyle,
	linkStyle,
	imgStyle
}

class NextPage extends Component {

	constructor(props) {
		super(props);
		/* Copyright 2020 Fine Art America */
		this.header = `https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/abstract-watercolor-rainbow-splash-irina-sztukowski.jpg`;
	}

	render() {
		return (
			<NextOuter>
				<NextInner>
					<ImageTile>
						<img src={this.header} style={style.imgStyle} />
					</ImageTile>
					<FloatingTile>
						<ul style={style.liStyle}>
						{Tools.map(tool => <li>{tool}</li>)}
						</ul>
					</FloatingTile>
				</NextInner>
				<NextInner>
					<Link to="/" style={style.linkStyle}>Back</Link>
				</NextInner>
			</NextOuter>
		)
	}
}

export default NextPage;
