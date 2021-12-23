import Layout from "../components/Layout";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<NextNProgress
				color="#24292F"
				startPosition={0.0}
				stopDelayMs={0}
				// height={3}
				// showOnShallow={true}
			/>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
