import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Error404 from "./Components/Error404";

import Game1 from "./Components/Games/Game1";
import Game2 from "./Components/Games/Game2";

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/game1">
						<Game1 />
					</Route>
					<Route exact path="/game2">
						<Game2 />
					</Route>
					<Route path="*">
						<Error404 />
					</Route>
				</Switch>
			</Router>
		);
	}
}
