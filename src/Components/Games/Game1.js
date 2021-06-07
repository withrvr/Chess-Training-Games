import React from "react";
import { Link } from "react-router-dom";

export default class Game1 extends React.Component {
	componentDidMount() {
		document.title = "Game 1 - Dark or Light";
	}

	render() {
		return (
			<div className="container mb-5 mt-3 text-center">
				<h4>
					Game 1 <br /> Dark or Light
				</h4>
				<hr />
				<div>
					Currently Under Development <br /> Will be Developed Soon
				</div>
				<div className="mt-4">
					<Link to="/">Go to Home Page</Link>
				</div>
			</div>
		);
	}
}
