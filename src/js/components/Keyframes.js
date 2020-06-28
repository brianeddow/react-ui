import { keyframes } from 'styled-components';

const myFrames = keyframes`
	0% {
		-webkit-transform: translate(-5px);
		transform: translate(-5px);
	} 
	60% {
		-webkit-transform: translate(5px);
		transform: translate(5px);
	}
`;

export default myFrames;
