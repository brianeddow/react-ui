import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import store from "../store/index";
import toggleState from "../actions/index";
import { Link } from "react-router-dom";


const Inner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 400px;
	height: 300px;
	color: #000;
	font-size: 57pt;
`;

const CarouselTwoWrapper = (props) => {

	const [title, setTitle] = useState("title");
	const textInput = useRef();

	const handleClick = () => {
		setTitle(textInput.current.value)
	}

	return (
		<CarouselItem />
	)
}

export default CarouselTwoWrapper;