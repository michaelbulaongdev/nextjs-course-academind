import Link from 'next/link';

export default function News() {
	return (
		<main>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href='/news/nextjs-updates'>NextJS Updates</Link>
				</li>
				<li>
					<Link href='/news/nextjs-updates'>Something New</Link>
				</li>
				<li>
					<Link href='/news/nextjs-updates'>What Else</Link>
				</li>
			</ul>
		</main>
	);
}
