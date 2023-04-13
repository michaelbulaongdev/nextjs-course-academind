//dynamic page

import {useRouter} from 'next/router';

export default function Details() {
	const router = useRouter();

	const newsItem = router.query.newsItem;

	return (
		<>
			<h2>Details of the news</h2>
		</>
	);
}
