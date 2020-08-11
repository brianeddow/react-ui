import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import middleWare from "../middleware/index";

const store = createStore(
	rootReducer,
	applyMiddleware(middleWare)
);

export default store;