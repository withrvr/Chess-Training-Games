import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
	return (
		<nav className="bg-cyan-500 mb-3">
			<div className="container flex gap-2 py-2 justify-center">
				<Link href="/">
					<a className="my-auto">
						<Image src="/favicon.ico" alt="logo" width={45} height={45} />
					</a>
				</Link>
				<div className="my-auto text-2xl ">
					<Link href="/">
						<a className="my-auto">Navbar</a>
					</Link>
				</div>
			</div>
		</nav>
	);
}
