import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
	width: 100vw;
	margin: 20vh auto;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Lines = [
	"This is just my alternate page",
	"Using React Router",
	"And figuring out how to use this software",
	"To create the most fun designs",
	"Simple designs"
];

const NextPage = () => {

	return (
		<NextOuter>
			<NextInner>
				Hello
				{Lines.map((n,i) => <p>{n}</p>)}
				<Link to="/">Back</Link>
			</NextInner>
		</NextOuter>
	)
}

export default NextPage;