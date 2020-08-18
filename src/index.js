import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NextPage from "./js/components/Next";
import store from "./js/store/index";
import App from "./js/components/App";

render(
	<Router>
		<Switch>
			<Route path="/two" component={NextPage} />
		</Switch>
	  <Provider store={store}>
	    <App />
	  </Provider>
  </Router>,
  document.getElementById("container")
);