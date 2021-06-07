import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
	componentDidMount() {
		document.title = "Home Page";
	}

	render() {
		return (
			<div className="container mb-5 text-center">
				<img
					src="/logo.svg"
					alt="Chess Logo"
					className="p-4"
					width="200px"
				/>
				<h1>Chess Training Games</h1>
				<div className="d-grid gap-2 col-md-6 mx-auto mt-3">
					<Link to="/game1" className="btn btn-outline-primary">
						Dark or Light
					</Link>

					<Link to="/game2" className="btn btn-outline-primary">
						Correct Square
					</Link>
				</div>
				<footer className="mt-5">
					Make with ❤️ by
					<a
						className="text-decoration-none"
						href="https://twitter.com/withrvr"
						target="_blank"
						rel="noreferrer"
					>
						&nbsp;@withrvr
					</a>
				</footer>
			</div>
		);
	}
}
