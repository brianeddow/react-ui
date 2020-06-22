import styled, { keyframes, css } from "styled-components";
import myFrames from "./Keyframes";

const BodyTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: 500ms ease-out;

  background: ${props => props.bgOne ? 
                `url('../../src/media/brown.jpg')` : 
                "#d6bb97"
  };
  ${props => props.bgOne && `
  	background-size: cover;
  	transition: 500ms ease-out;
  `};

  ${props => props.moveNav && css`
  	animation: ${myFrames} 300ms ease-in-out 0s 4;
  	transition: 100ms ease-out;
  `}
`;

export default BodyTag;