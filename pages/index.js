import { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default class Home extends Component {
	render() {
		return (
			<>
				<Head>
					<title> Home - Chess Training Games </title>
				</Head>

				<div className="container text-center vh-100">
					{/* image and heading */}
					<div>
						<Image
							src="/images/white_king.svg"
							alt="Chess Logo"
							className="p-3"
							width={200}
							height={200}
						/>
						<h1 className="text-3xl">Chess Training Games</h1>
					</div>
					{/* links of the games */}
					<div className="grid grid-col-1 gap-2 mx-auto my-3 ">
						<Link href="/game1">
							<a className="btn"> Dark or Light </a>
						</Link>
						<Link href="/game2" className="btn btn-outline-primary">
							<a className="btn"> Correct Square </a>
						</Link>
						<Link href="/game3" className="btn btn-outline-primary">
							<a className="btn"> game 3 </a>
						</Link>
					</div>
					{/* footer */}
					<footer>
						<span>Make with ❤️ by </span>
						<a
							className="text-decoration-none"
							href="https://github.com/withrvr"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							@withrvr
						</a>
					</footer>
				</div>
			</>
		);
	}
}
