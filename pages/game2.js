import { Component } from "react";
import { random_square_name } from "../components/Random";

import Head from "next/head";
import Image from "next/image";

// replacement for this "import Chessboard from "chessboardjsx";" because it does not work
import dynamic from 'next/dynamic';
const Chessboard = dynamic(() => import('chessboardjsx'), {
	ssr: false  // <- this do the magic ;)
});

export default class Game2 extends Component {
	state = {
		started: false,
		correct_square_postion: random_square_name(),

		no_of_correct_guess: 0,
		no_of_incorrect_guess: 0,
		// user_guess_was: "correct, incorrect",

		chess_board_orientation: "white",
		show_chess_board_notation: true,
	};

	validate_if_correct(user_square_position) {
		if (user_square_position === this.state.correct_square_postion) {
			this.setState({
				no_of_correct_guess: this.state.no_of_correct_guess + 1,
				correct_square_postion: random_square_name(),
				user_guess_was: "success",
			});
		} else {
			this.setState({
				no_of_incorrect_guess: this.state.no_of_incorrect_guess + 1,
				correct_square_postion: random_square_name(),
				user_guess_was: "danger",
			});
		}
	}

	render() {
		// progress bar logic
		const no_of_correct_guess = this.state.no_of_correct_guess;
		const no_of_incorrect_guess = this.state.no_of_incorrect_guess;
		const total_guess = no_of_correct_guess + no_of_incorrect_guess;

		const no_of_correct_guess_perc =
			(no_of_correct_guess / total_guess) * 100;
		const no_of_incorrect_guess_perc =
			(no_of_incorrect_guess / total_guess) * 100;

		// const user_guess_was = this.state.user_guess_was;

		return (
			<>
				<Head>
					<title> Game 2 - Correct Square </title>
				</Head>

				<div className="container mb-5 mt-2 text-center">
					{/* main game playground */}
					{this.state.started ? (
						<>
							{/* random square */}
							<div className="display-3 fw-bold text-secondary">
								{this.state.correct_square_postion}
							</div>
							{/* chess board */}
							<main className="d-flex justify-content-center mt-3 mx-2">
								<Chessboard
									showNotation={
										this.state.show_chess_board_notation
									}
									draggable={false}
									position="start"
									orientation={this.state.chess_board_orientation}
									calcWidth={(size) => {
										const width = size.screenWidth;
										if (width <= 500) return width - 50;
										if (width <= 650) return width - 100;
										return 500;
									}}
									onSquareClick={(user_square_position) => {
										this.validate_if_correct(
											user_square_position
										);
									}}
								/>
							</main>
							{/* Progress Bar */}
							<div className=" grid mt-3 mx-auto">
								{/* ProgressBar */}
								<div
									striped
									animated
									style={{
										height: "1.4rem",
									}}
								>
									{/* ProgressBar */}
									<div
										variant="success"
										label={
											no_of_correct_guess
												? no_of_correct_guess
												: ""
										}
										style={{
											width: `${no_of_correct_guess_perc}%`,
										}}
									/>
									{/* ProgressBar */}
									<div
										label={
											no_of_incorrect_guess
												? no_of_incorrect_guess
												: ""
										}
										variant="danger"
										style={{
											width: `${no_of_incorrect_guess_perc}%`,
										}}
									/>
								</div>
							</div>
						</>
					) : (
						<>
							{/* rules and choices */}
							<div className=" grid grid-col-1 mx-auto">
								<h3>
									<div>Game 2</div>
									<div>Correct Square</div>
								</h3>
								<label
									className="form-check-label"
									htmlFor="showNotation"
								>
									Show Notation
								</label>
								<div className="mt-1 form-switch">
									<input
										className="form-check-input"
										type="checkbox"
										id="showNotation"
										onClick={() =>
											this.setState({
												show_chess_board_notation:
													!this.state
														.show_chess_board_notation,
											})
										}
										checked={
											this.state.show_chess_board_notation
										}
									/>
								</div>
								<div className="mt-1">Orientation</div>
								<div>
									<button
										onClick={() =>
											this.setState({
												started: !this.state.started,
												chess_board_orientation: "white",
											})
										}
									>
										<Image
											// src="https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg"
											src="/images/white_king.svg"
											alt="white"
											width={45}
											height={45}
										/>
									</button>
									<button
										onClick={() =>
											this.setState({
												started: !this.state.started,
												chess_board_orientation: "black",
											})
										}
									>
										<Image
											// src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"
											src="/images/black_king.svg"
											alt="black"
											width={45}
											height={45}
										/>
									</button>
								</div>
								<div className="mt-3">
									Knowing the chessboard coordinates is a very
									important chess skill:, Most chess courses and
									exercises use the algebraic notation
									extensively., It makes it easier to talk to your
									chess friends, since you both understand the
									language of chess., You can analyze a game
									more effectively if you can quickly recognize
									coordinates., A coordinate appears on the screen
									and you must click on the corresponding square
								</div>
							</div>
						</>
					)}
					{/* start-stop button */}
					{this.state.started ? (
						<>
							<button
								variant="outline-primary"
								className="my-3"
								onClick={() =>
									this.setState({
										started: !this.state.started,
									})
								}
							>
								&nbsp;&nbsp;Stop&nbsp;&nbsp;
							</button>
						</>
					) : (
						<>Start</>
					)}
				</div>
			</>
		);
	}
}
