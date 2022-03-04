import Head from "next/head";
import { About } from "../components/About";
import { Navigation } from "../components/comps/Navigation";
import { Contact } from "../components/Contact";
import { Logo } from "../components/Logo";
import { Offer } from "../components/Offer";
import { Projects } from "../components/Projects";

export default function Home() {
	return (
		<div className="Home">
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
			<Navigation />
			<Logo />
			<About />
			<Offer />
			<Projects />
			<Contact />
		</div>
	);
}
