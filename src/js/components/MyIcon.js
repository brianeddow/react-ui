import React from "react";
import styled from "styled-components";

const size = {
	height: "25px",
	width: "25px",
	twitter: {
		height: "25px",
		width: "30px"
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
	return (
		<IconWrapper>
			<img 
				src={"../../src/media/"+name+".png"} 
				alt={name} 
				style={name == "twitter" ? 
							 size.twitter : 
							 size
				} 
			/>
		</IconWrapper>
	)
}