import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Error404 extends React.Component {
	componentDidMount() {
		document.title = "404 Error - Page Not Found";
	}

	render() {
		return (
			<Container className="my-5 text-center">
				<Image src="/images/are_you_sure_about_that.gif" alt="" />
				<h1>404</h1>
				<h1>Page Not Found</h1>
				<div className="mt-4">
					<Link to="/">Go to Home Page</Link>
				</div>
			</Container>
		);
	}
}
