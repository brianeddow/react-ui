import React from "react";
import styled from "styled-components";
import { Socs } from "./GetSocials";

const size = {
	height: "30px",
	width: "30px",
	twitter: {
		height: "30px",
		width: "40px"
	}
}

const IconWrapper = styled.p`
	user-select: "none";
	transition: 250ms ease-in-out;

	&:hover ${IconWrapper} {
    transform: translate(-3px,-3px);
    transition: 250ms ease-in-out;
    filter: drop-shadow(5px 9px 6px #2a241c);
  }
`;

export const MyIcon = ({ name }) => {

	const soc = Socs[name];

	return (
		<IconWrapper>
			<img 
				src={soc} 
				alt={name} 
				style={name == "twitter" ? 
							 size.twitter : 
							 size
				} 
			/>
		</IconWrapper>
	)
}