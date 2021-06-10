import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Game1 extends React.Component {
	componentDidMount() {
		document.title = "Game 2 - Correct Square";
	}
	render() {
		return (
			<Container className="mb-5 mt-3 text-center">
				<h4>
					Game 2 <br /> Correct Square
				</h4>
				<hr />
				<div>
					Currently Under Development <br /> Will be Developed Soon
				</div>
				<div className="mt-4">
					<Link to="/">Go to Home Page</Link>
				</div>
			</Container>
		);
	}
}
