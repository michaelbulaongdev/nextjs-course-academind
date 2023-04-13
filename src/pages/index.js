import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<h1>HOME</h1>
			<hr />
			<Link href='/news'>{`>>> to News Page`}</Link>
		</main>
	);
}
