import React from "react";
import styled from "styled-components";

const FloatingTile = styled.div`
	position: relative;
	z-index: 400;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	user-select: none;
	width: 300px;
	height: 400px;
	border: 0;
	border-top-right-radius: 50px;
	font-family: Quicksand, sans-serif;
	font-size: 10pt;
	font-weight: 400;
	letter-spacing: 2px;
	text-decoration: none;
	color: #000;
	background: #fff;
	filter: drop-shadow(0 0 1.55rem #800);
`;

export default FloatingTile;