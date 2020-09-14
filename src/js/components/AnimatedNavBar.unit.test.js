import store from "../store/index";

describe('Animated Nav Bar is initially hidden', () => {
	test('dropDown is set to false', () => {
		const bools = store.getState();
		// dropDown state key
		const bool = bools['dropDown']
	  expect(bool).toBe(false);
	});
});
