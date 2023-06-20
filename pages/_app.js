import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Component {...pageProps} />;
			<footer>
				<center>
					<p>© 2023 Aditya</p>
				</center>
			</footer>
		</div>
	);
};

export default MyApp;
