import React from "react";
import Chessboard from "chessboardjsx";
import {
	Button,
	Col,
	Container,
	ProgressBar,
	Image,
	ButtonGroup,
} from "react-bootstrap";
import { random_square_name } from "../Other/Random";

export default class Game1 extends React.Component {
	state = {
		started: false,
		correct_square_postion: random_square_name(),

		no_of_correct_guess: 0,
		no_of_incorrect_guess: 0,
		// user_guess_was: "correct, incorrect",

		chess_board_orientation: "white",
		show_chess_board_notation: true,
	};

	componentDidMount() {
		document.title = "Game 2 - Correct Square";
	}
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
			<Container className="mb-5 mt-2 text-center">
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
						<Col md={10} lg={6} className="mt-3 mx-auto">
							<ProgressBar
								striped
								animated
								style={{
									height: "1.4rem",
								}}
							>
								<ProgressBar
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
								<ProgressBar
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
							</ProgressBar>
						</Col>
					</>
				) : (
					<>
						{/* rules and choices */}
						<Col md={6} className="mx-auto">
							<h3>
								<div>Game 2</div>
								<div>Correct Square</div>
							</h3>
							<label
								className="form-check-label"
								for="showNotation"
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
							<ButtonGroup>
								<Button
									variant="outline-primary"
									onClick={() =>
										this.setState({
											started: !this.state.started,
											chess_board_orientation: "white",
										})
									}
								>
									<Image src="https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" />
								</Button>
								<Button
									variant="outline-primary"
									onClick={() =>
										this.setState({
											started: !this.state.started,
											chess_board_orientation: "black",
										})
									}
								>
									<Image src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg" />
								</Button>
							</ButtonGroup>
							<div className="mt-3">
								Knowing the chessboard coordinates is a very
								important chess skill:, Most chess courses and
								exercises use the algebraic notation
								extensively., It makes it easier to talk to your
								chess friends, since you both understand the
								"language of chess"., You can analyze a game
								more effectively if you can quickly recognize
								coordinates., A coordinate appears on the screen
								and you must click on the corresponding square
							</div>
						</Col>
					</>
				)}

				{/* start-stop button */}
				{this.state.started ? (
					<>
						<Button
							variant="outline-primary"
							className="my-3"
							onClick={() =>
								this.setState({
									started: !this.state.started,
								})
							}
						>
							&nbsp;&nbsp;Stop&nbsp;&nbsp;
						</Button>
					</>
				) : (
					<>Start</>
				)}
			</Container>
		);
	}
}
