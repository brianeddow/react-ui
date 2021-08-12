import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import store from "../store/index";
import toggleState from "../actions/index";
import { Quicksand } from "../../css/index.css";

// NextOuter
const NextOuter = React.lazy(() => import('./NextOuter'));
// Next Inner
const NextInner = React.lazy(() => import('./NextInner'));
// Next Floating Tile
const FloatingTile = React.lazy(() => import('./NextFloatingTile'));
// Next Image Tile
const ImageTile = React.lazy(() => import('./NextImageTile'));

const Tools = [
	"react",
	"react-redux",
	"hooks",
	"react router",
	"styled somponents",
	"jest"
];

const ulStyle = {
	'listStyleType': 'none',
	'textAlign': 'center',
	'marginLeft': '-30px',
	'lineHeight': '50px',
	'fontColor': '#000',
	'textTransform': 'uppercase'
};

const linkStyle = {
	'textDecoration': 'none',
	'color': '#000'
};

const imgStyle = {
	'width': '450px',
	'height': '400px',
	'borderBottomLeftRadius': '85px'
};

const style = {
	ulStyle,
	linkStyle,
	imgStyle
}

class NextPage extends Component {

	constructor(props) {
		super(props);
		this.bg = "../../src/media/carouselOneImage.png";
	}

	render() {
		return (
			<React.Suspense fallback={`<h1>Error in Next (Lazy) Component</h1>`}>
				<NextOuter>
					<NextInner>
						<ImageTile>
							<img src={this.bg} style={style.imgStyle} />
						</ImageTile>
						<FloatingTile>
							<ul style={style.ulStyle}>
								{Tools.map((tool, i) => <li key={`_${tool}`}>{tool}</li>)}
								<Link to="/" style={style.linkStyle}>&#60;&#60;&#60;</Link>
							</ul>
						</FloatingTile>
					</NextInner>
				</NextOuter>
			</React.Suspense>
		)
	}
}

export default NextPage;
