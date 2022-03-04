import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="pl-PL">
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					></meta>
					<meta
						name="description"
						content="Fachowe usługi elektryczne w Warszawa i okolicach. Naprawy awarii, kompleksowe uruchomienia oraz instalacje w zakresie elektryki. Dla indywidualnych i biznesów."
						// content="Fachowe usługi elektryczne w Warszawa i okolicach. Naprawy awarii, kompleksowe uruchomienia, instalacje w zakresie elektryki."
					/>
					<link rel="shortcut icon" href="/miernik.svg"></link>
					<title>JPDsystem | Elektryk</title>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
export default MyDocument;
