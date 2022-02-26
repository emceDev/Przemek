import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Logo } from "../components/Logo";
import { Offer } from "../components/Offer";
import { Projects } from "../components/Projects";

export default function Home() {
	return (
		<div className="Home">
			<Logo />
			<About />
			<Offer />
			<Projects />

			<Contact />
		</div>
	);
}
