import '@/styles/globals.css';
import Link from 'next/link';

export default function App({Component, pageProps}) {
	return (
		<>
			<Link href='/'>{`<<< back to Home`}</Link>
			<Component {...pageProps} />
		</>
	);
}
