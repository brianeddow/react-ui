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
					dropDown: newBool
				}
				break;
			case "bgOne":
				return {
					...state,
					bgOne: newBool
				}
				break;
			case "moveNav":
				return {
					...state,
					moveNav: newBool
				}
				break;
			case "extras":
				return {
					...state,
					extras: newBool
				}
				break;
			case "socials":
				return {
					...state,
					socials: newBool
				}
				break;
			case "moveCarouselLeft":
				return {
					...state,
					moveCarouselLeft: newBool
				}
				break;
			case "carouselOne":
				return {
					...state,
					carouselOne: newBool
				}
				break;
			case "clock":
				return {
					...state,
					clock: new Date().toLocaleString()
				}
				break;
		}
	}
	return state;
}

export default rootReducer;