import React from "react";

export default class Game1 extends React.Component {
	state = {
		started: false,
		ran_square: "??",
		correct_guess: 0,
		incorrect_guess: 0,
	};
	componentDidMount() {
		document.title = "Game 1 - Dark or Light";
		this.setState({
			ran_square: this.random_square_name(),
		});
	}

	random_number(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}
	random_square_name() {
		const letters = "abcdefgh";
		const numbers = "12345678";
		const letter = letters.charAt(this.random_number(0, letters.length));
		const number = numbers.charAt(this.random_number(0, numbers.length));
		return letter + number;
	}
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
				ran_square: this.random_square_name(),
			});
		} else {
			this.setState({
				incorrect_guess: this.state.incorrect_guess + 1,
				ran_square: this.random_square_name(),
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
			<div className="vh-100 p-4">
				<div className="text-center">
					<h3>
						Game1 <br /> Dark or Light
					</h3>
					<button
						className="btn btn-outline-primary my-3"
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

					<div>
						{this.state.started ? (
							<>
								<h1 className="my-3">
									{this.state.ran_square}
								</h1>

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

								<div className="mt-5 col-md-6 col mx-auto">
									<div
										className="progress progress-bar-striped progress-bar-animated"
										style={{
											height: "1.3rem",
										}}
									>
										<div
											role="progressbar"
											className="progress-bar bg-success"
											style={{
												width: `${correct_guess_perc}%`,
											}}
										>
											{/* {correct_guess ? (
												<>{correct_guess}</>
											) : (
												<></>
											)} */}
										</div>
										<div
											role="progressbar"
											className="progress-bar bg-danger"
											style={{
												width: `${incorrect_guess_perc}%`,
											}}
										>
											{/* {incorrect_guess ? (
												<>{incorrect_guess}</>
											) : (
												<></>
											)} */}
										</div>
									</div>
								</div>
							</>
						) : (
							<div>
								{/* You Can use your Keyboards <br />
								Left and Right arrow keys also */}
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
