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
			<Navigation />
			<Logo />
			<About />
			<Offer />
			<Projects />
			<Contact />
		</div>
	);
}
