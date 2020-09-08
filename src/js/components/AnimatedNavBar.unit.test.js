import store from "../store/index";

describe('this menu drops down on hover', () => {
	test('state is updated in store', () => {
		const bool = store.getState();
		const dropDown = bool['dropDown'];
	  expect(dropDown).toBeFalsy();
	});
});
