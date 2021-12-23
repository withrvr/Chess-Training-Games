import { Component } from 'react'
import Head from 'next/head'

// replacement for this "import Chessboard from "chessboardjsx";" because it does not work in nextjs
import dynamic from 'next/dynamic';
const Chessboard = dynamic(() => import('chessboardjsx'), {
	ssr: false  // <- this do the magic ;)
});

import * as ChessJS from "chess.js"; // import { Chess } from 'chess.js' gives an error
const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess; // For VS code intellisence to work


export default class game3 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			piecesPosition: {
				// 'a8': 'wQ', 'b8': 'wQ', 'c8': 'wQ', 'd8': 'wQ', 'e8': 'wQ', 'f8': 'wQ', 'g8': 'wQ', 'h8': 'wQ', // horizontal-top
				// 'a1': 'wQ', 'b1': 'wQ', 'c1': 'wQ', 'd1': 'wQ', 'e1': 'wQ', 'f1': 'wQ', 'g1': 'wQ', 'h1': 'wQ', // horizontal-bottom

				// 'a1': 'wQ', 'a2': 'wQ', 'a3': 'wQ', 'a4': 'wQ', 'a5': 'wQ', 'a6': 'wQ', 'a7': 'wQ', 'a8': 'wQ', // vertical-left
				// 'h1': 'wQ', 'h2': 'wQ', 'h3': 'wQ', 'h4': 'wQ', 'h5': 'wQ', 'h6': 'wQ', 'h7': 'wQ', 'h8': 'wQ', // vertical-right
				
				// 'a8': 'wQ', 'b7': 'wQ', 'c6': 'wQ', 'd5': 'wQ', 'e4': 'wQ', 'f3': 'wQ', 'g2': 'wQ', 'h1': 'wQ', // diagonal top-left to bottom-right
				'a1': 'wQ', 'b2': 'wQ', 'c3': 'wQ', 'd4': 'wQ', 'e5': 'wQ', 'f6': 'wQ', 'g7': 'wQ', 'h8': 'wQ', // diagonal bottom-left to top-right
			},
			horizontalPositionStatus: false,
			verticalPositionStatus: false,
			diagonalPositionStatus: false,
		}
	}

	checkPositionStatus() {
		const positionsArray = Object.keys(this.state.piecesPosition);
		// console.log(positionsArray);

		// get first and second charater of each position from the array
		const firstChar = positionsArray.map(position => position.charAt(0));
		const secondChar = positionsArray.map(position => position.charAt(1));

		// unique values
		const firstCharUnique = [...new Set(firstChar)];
		const secondCharUnique = [...new Set(secondChar)];
		// console.log(firstCharUnique);
		// console.log(secondCharUnique);

		firstCharUnique.length < 8 ? this.setState({ verticalPositionStatus: false }) : this.setState({ verticalPositionStatus: true });
		secondCharUnique.length < 8 ? this.setState({ horizontalPositionStatus: false }) : this.setState({ horizontalPositionStatus: true });

		// this.setState({ horizontalPositionStatus:true })
	}

	UNSAFE_componentWillMount() {
		this.checkPositionStatus();
	}
	
	render() {
		const horizontalColor = this.state.horizontalPositionStatus ? 'text-green-500' : 'text-red-500';
		const verticalColor = this.state.verticalPositionStatus ? 'text-green-500' : 'text-red-500';
		const diagonalColor = 'text-blue-500'; // this.state.diagonalPositionStatus ? 'text-green-500' : 'text-red-500';

		return (
			<>
				<Head>
					<title> Game 3 - 8 Queens but No Threats </title>
				</Head>

				<div className="container text-center mb-32">
					<h1 className="text-3xl my-4">
						<div>Game 3</div>
						<div>8 Queens but No Threats</div>
					</h1>

					<div>
						<p> Place 8 Queens on the board in a way that no Queen threatens another one </p>
						<ol className='my-3'>
							<li className={ horizontalColor } > Horizontal ( numbers range ) </li>
							<li className={ verticalColor } > Vertically ( alphabets range ) </li>
							<li className={ diagonalColor } > Diagonally ***cheking code left </li>
						</ol>
					</div>

					<main className='grid justify-center'>

						<Chessboard
							position={this.state.piecesPosition}

							getPosition = {(currentPosition) => {
								this.setState({ piecesPosition: currentPosition })
								// console.log(this.state.piecesPosition);
								
								this.checkPositionStatus();
							}}

							onDrop={(source, target) => {
								// see if the move is legal
								const game = new Chess();
								let move = game.move({
								  from: source,
								  to: target,
								  promotion: "q" // NOTE: always promote to a queen for example simplicity
								});
							
								// illegal move
								if (move === null) return;
							
								this.setState({ piecesPosition: this.state.piecesPosition });
							}}
						/>

						

					</main>
				</div>
			</>
		)
	}
}
