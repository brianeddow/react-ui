import styled, { keyframes } from "styled-components";

const bgUrl = "https://wallpaper-house.com/data/out/6/wallpaper2you_106232.jpg";

const BodyTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 500ms ease-out;

  background: ${props => props.bgOne ? 
                `url(${bgUrl})` : 
                "#d6bb97"
  };

  ${props => props.bgOne && `
  	background-size: cover;
  	transition: 500ms ease-out;
  `};
`;

export default BodyTag;
