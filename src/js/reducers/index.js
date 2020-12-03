import { TOGGLE_STATE } from "../constants/action-types";

const initialState = {
	dropDown: false,
	bgOne: false,
  moveNav: false,
  extras: false,
  socials: false,
  moveCarouselLeft: false,
  carouselOne: false,
  clock: new Date().toLocaleString()
}

function rootReducer(state = initialState, action) {
	if (action.type == TOGGLE_STATE) {
		const newBool = !state[action.payload];
		const newKey = action.payload;

		switch (newKey) {
			case "dropDown":
				return {
					...state,
					[newKey]: newBool
				}
				break;
			case "bgOne":
				return {
					...state,
					[newKey]: newBool
				}
				break;
			case "moveNav":
				return {
					...state,
					[newKey]: newBool
				}
				break;
			case "extras":
				return {
					...state,
					[newKey]: newBool
				}
				break;
			case "socials":
				return {
					...state,
					[newKey]: newBool
				}
				break;
			case "moveCarouselLeft":
				return {
					...state,
					[newKey]: newBool
				}
				break;
			case "carouselOne":
				return {
					...state,
					[newKey]: newBool
				}
				break;
			case "clock":
				return {
					...state,
					[newKey]: new Date().toLocaleString()
				}
				break;
		}
	}
	return state;
}

export default rootReducer;