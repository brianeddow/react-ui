import React from "react";
import styled from "styled-components";
import { Socials } from "./GetSocials";

const dropShadow = "drop-shadow(0 0 0.35rem gold)";

const size = {
	height: "30px",
	width: "30px",
	filter: dropShadow,
	twitter: {
		height: "30px",
		width: "40px",
		filter: dropShadow
	}
}

const IconWrapper = styled.p`
	user-select: none;
	transition: 250ms ease-in-out;

	&:hover ${IconWrapper} {
    transform: scale(1.2) translate(0,-3px);
    transition: 250ms ease-in-out;
    filter: dropShadow;
  }
`;

export const MyIcon = ({ name }) => {

	const socialImg = Socials[name];

	return (
		<IconWrapper>
			<img 
				src={socialImg} 
				alt={name} 
				style={
					name == "twitter" ? 
					size.twitter : 
					size
				} 
			/>
		</IconWrapper>
	)
}