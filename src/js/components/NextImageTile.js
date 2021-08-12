import React from "react";
import styled from "styled-components";

const ImageTile = styled.div`
	position: relative;
	z-index: 400;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	user-select: none;
	width: 450px;
	height: 400px;
	border: 0;
	color: #000;
	background: transparent;
`;

export default ImageTile;