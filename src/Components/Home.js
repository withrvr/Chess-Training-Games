import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
	componentDidMount() {
		document.title = "Chess Training Games";
	}

	render() {
		return (
			<div className="container vh-100">
				<div className="d-flex flex-column text-center justify-content-center">
					<div className="my-5">
						<img
							src="/logo.svg"
							alt="Chess Logo"
							className="p-4"
							width="200px"
						/>
						<h1>Chess Training Games</h1>
						<div className="d-grid gap-2 mx-auto mt-3 col-lg-6 col-md-8">
							<Link
								to="/game1"
								className="btn btn-outline-primary"
							>
								Dark or Light
							</Link>
							<Link
								to="/game2"
								className="btn btn-outline-primary"
							>
								Correct Square
							</Link>
						</div>
					</div>
					<div>
						<span>Make with ❤️ by</span>
						<a
							className="text-decoration-none"
							href="https://twitter.com/withrvr"
							target="_blank"
							rel="noreferrer"
						>
							&nbsp;@withrvr
						</a>
					</div>
				</div>
			</div>
		);
	}
}
