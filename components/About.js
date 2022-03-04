const thingies =
	" usuwanie awarii 24H/7  - modernizacją rozdzielni- składanie rozdzielnic- przyłącza  instalacjami odgromowymi";
let txt = thingies.replace(/-/g, "\n•");
import Image from "next/image";
import { ImgHolder } from "./comps/ImgHolder";
const things = [
	{
		id: 1,
		title: "Warszawa i okolice",
		desc: "JPD System świadczy profesjonalne usługi elektryczne w miejscowości Warszawa oraz jej okolicach.",
	},
	{
		id: 2,
		title: "Elektrycy z doświadczeniem",
		desc: "Nasi fachowcy od lat pracują w branży elektrycznej serwując kompleksowe uruchomienia, instalacje oraz naprawy awarii w zakresie elektryki.",
	},
	{
		id: 3,
		title: "Kontakt z fachowcem",
		desc: "Bezpośredni i szybki kontakt telefoniczny lub mailowy z fachowcem w celu umówienia wizyty. tel email",
	},
	{
		id: 4,
		title: "Jesteśmy dla Ciebie!",
		desc: "Przyjmujemy zlecenia od zaraz zarówno od biznesów(B2B) jak i klientów indiwidualnych(B2C). Bez względu na czas ich trwania dostarczymy materiały i pracowników do każdego projektu.",
	},
];

export const About = () => {
	return (
		<div id="About" className="About">
			<h1 className="Heading">O nas</h1>
			<div className="TContainer">
				{things.map((t) => (
					<Thingie key={t.id} desc={t.desc} title={t.title} />
				))}
			</div>
			{/* <ImgHolder src="/team.png" className="AboutImg" /> */}
		</div>
	);
};

export const Thingie = (props) => {
	return (
		<div className="Thingie">
			<div>
				<h1 className="TTitle">{props.title}</h1>
				<p className="TDesc">{props.desc}</p>
			</div>
			<div className="TImg">
				<Image src="/miernik.svg" layout="fill" alt={props.title} />
			</div>
		</div>
	);
};
