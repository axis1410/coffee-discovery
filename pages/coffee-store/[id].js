import Link from 'next/link';
import { useRouter } from 'next/router';

const CoffeeStore = () => {
	const router = useRouter();
	console.log('router: ', router);

	return (
		<div>
			Coffee Store Page
			<Link href='/'>Back to home</Link>
		</div>
	);
};
export default CoffeeStore;
