import { keyframes } from 'styled-components';

const myFrames = keyframes`
	0% {
		-webkit-transform: translate(-3px);
		transform: translate(-3px);
	} 
	70% {
		-webkit-transform: translate(3px);
		transform: translate(3px);
	} 	
`;

export default myFrames;
