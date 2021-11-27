import Head from "next/head";
// import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title> Chess Training Games :) </title>
				<link rel="icon" href="/favicon.svg" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <Navbar /> */}

			<main>
				{children}
			</main>
		</>
	);
};

export default Layout;
