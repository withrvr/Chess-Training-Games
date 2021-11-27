import { Component } from "react";
import { random_square_name } from "../components/Random";
import Head from "next/head";

export default class Game1 extends Component {
	state = {
		started: false,
		ran_square: random_square_name(),
		correct_guess: 0,
		incorrect_guess: 0,
	};

	validate_if_correct(user_color) {
		const ran_square = this.state.ran_square;
		const letter = ran_square[0];
		const number = parseInt(ran_square[1]);
		let real_color = null;

		if ("aceg".indexOf(letter) > -1 && number % 2 === 0) {
			real_color = "light";
		} else {
			real_color = "dark";
		}

		// console.log("real: ", real_color, " --- user: ", user_color);
		// console.log();

		if (real_color === user_color) {
			this.setState({
				correct_guess: this.state.correct_guess + 1,
				ran_square: random_square_name(),
			});
		} else {
			this.setState({
				incorrect_guess: this.state.incorrect_guess + 1,
				ran_square: random_square_name(),
			});
		}
	}

	render() {
		// progress bar logic
		const correct_guess = this.state.correct_guess;
		const incorrect_guess = this.state.incorrect_guess;
		const total_guess = correct_guess + incorrect_guess;

		const correct_guess_perc = (correct_guess / total_guess) * 100;
		const incorrect_guess_perc = (incorrect_guess / total_guess) * 100;

		return (
			<>
				<Head>
					<title> Game 1 - Dark or Light </title>
				</Head>

				<div className="container mt-3 text-center">
					{/* heading and start stop btn */}
					<header>

						<h3>
							<div>Game 1</div>
							<div>Dark or Light</div>
						</h3>

						<button
							variant="outline-primary"
							className="my-3"
							onClick={() =>
								this.setState({
									started: !this.state.started,
								})
							}
						>
							&nbsp;&nbsp;
							{this.state.started ? <>Stop</> : <>Start</>}
							&nbsp;&nbsp;
						</button>

					</header>
					{/* main game playground */}
					<main>
						{this.state.started ? (
							<>
								<h1 className="my-3">{this.state.ran_square}</h1>
								{/* dark or light blocks */}
								<div className="d-flex justify-content-center">
									{/* Dark */}
									<div
										onClick={() =>
											this.validate_if_correct("dark")
										}
										className="p-5"
										style={{
											backgroundColor: "#B58863",
										}}
									></div>
									{/*space*/}
									<div className="p-3"></div>
									{/* Light */}
									<div
										onClick={() =>
											this.validate_if_correct("light")
										}
										className="p-5"
										style={{
											backgroundColor: "#F0D8B4",
										}}
									></div>
								</div>
								{/* Progress Bar */}
								<div className="mt-5 mx-auto">
									{/* ProgressBar */}
									<div
										striped
										animated
										style={{
											height: "1.4rem",
										}}
									>
										<div
											variant="success"
											label={
												correct_guess ? correct_guess : ""
											}
											style={{
												width: `${correct_guess_perc}%`,
											}}
										/>
										<div
											label={
												incorrect_guess
													? incorrect_guess
													: ""
											}
											variant="danger"
											style={{
												width: `${incorrect_guess_perc}%`,
											}}
										/>
									</div>
								</div>
							</>
						) : (
							<></>
						)}
					</main>
				</div>
			</>
		);
	}
}
