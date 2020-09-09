import store from "../store/index";

describe('component state exists', () => {
	test('component count is not 0', () => {
		const bools = store.getState();
		// 7 state values are boolean
		const boolsCount = Object.keys(bools).length-1;
	  expect(boolsCount).toBe(7);
	});
});