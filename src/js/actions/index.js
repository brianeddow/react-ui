import { TOGGLE_STATE } from "../constants/action-types";

export default function toggleState(payload) {
	return { type: TOGGLE_STATE, payload };
};