import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
const things = [
	{
		id: 1,
		title: "Warszawa i okolice",
		desc: "JPD System świadczy profesjonalne usługi elektryczne w miejscowości Warszawa oraz jej okolicach.",
		img: "/warszawa.svg",
	},
	{
		id: 2,
		title: "Elektrycy z doświadczeniem",
		desc: "Nasi fachowcy od lat pracują w branży elektrycznej serwując kompleksowe uruchomienia, instalacje oraz naprawy awarii w zakresie elektryki.",
		img: "/workers.jpg",
	},
	{
		id: 3,
		title: "Kontakt z fachowcem",
		desc: "Bezpośredni i szybki kontakt telefoniczny lub mailowy z fachowcem w celu umówienia wizyty. tel email",
		img: "/installation3.jpg",
	},
	{
		id: 4,
		title: "Jesteśmy dla Ciebie!",
		desc: "Przyjmujemy zlecenia od zaraz zarówno od biznesów(B2B) jak i klientów indiwidualnych(B2C). Bez względu na czas ich trwania dostarczymy materiały i pracowników do każdego projektu.",
		img: "/miernik.svg",
	},
];

export const About = () => {
	return (
		<div id="About" className="About">
			<h1 className="Heading">O nas</h1>
			<div className="TContainer">
				{things.map((t) => (
					<Thingie
						key={t.id}
						id={"Thingie" + t.id}
						desc={t.desc}
						title={t.title}
						img={t.img}
					/>
				))}
			</div>
			{/* <ImgHolder src="/team.png" className="AboutImg" /> */}
		</div>
	);
};

export const Thingie = (props) => {
	const [hovered, setHovered] = useState(false);
	useEffect(() => {
		const el = window.document.getElementById(props.id);
		let options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.9,
		};
		const observer = new IntersectionObserver((e) => {
			// console.log("I m in", props.id, e[0].isIntersecting);
			e[0].isIntersecting ? setHovered(true) : null;
		}, options);
		observer.observe(el);
	}, []);
	return (
		<div
			className={`Thingie ${hovered ? "hovered" : ""}`}
			id={props.id}
			// onMouseEnter={() => {
			// 	setHovered(true);
			// }}
		>
			<div>
				<h2 className="TTitle">{props.title}</h2>
				<p className="TDesc">{props.desc}</p>
			</div>
			<div className="TImg">
				{/* asdasd */}
				{/* <img src={props.img} layout="fill" /> */}
				{/* <img src="/warszawa.svg" layout="fill" /> */}
				<Image
					src={props.img}
					layout="fill"
					alt={props.title}
					objectFit="contain"
				/>
			</div>
		</div>
	);
};
