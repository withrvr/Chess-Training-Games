import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Image } from "react-bootstrap";

export default class Home extends React.Component {
	componentDidMount() {
		document.title = "Chess Training Games";
	}

	render() {
		return (
			<Container className="text-center vh-100">
				{/* image and heading */}
				<div>
					<Image
						src="/logo.svg"
						alt="Chess Logo"
						className="p-3"
						width="200px"
					/>
					<h1>Chess Training Games</h1>
				</div>

				{/* links of the games */}
				<Col lg={6} md={8} className="d-grid gap-2 mx-auto my-3">
					<Link to="/game1" className="btn btn-outline-primary">
						Dark or Light
					</Link>
					<Link to="/game2" className="btn btn-outline-primary">
						Correct Square
					</Link>
				</Col>

				{/* footer */}
				<footer>
					<span>Make with ❤️ by</span>
					<a
						className="text-decoration-none"
						href="https://twitter.com/withrvr"
						target="_blank"
						rel="noreferrer"
					>
						{" "}
						@withrvr
					</a>
				</footer>
			</Container>
		);
	}
}
