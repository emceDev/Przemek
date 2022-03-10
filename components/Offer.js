import { Offerie } from "./comps/Offerie";
import { ImgHolder } from "./comps/ImgHolder";
import { useEffect, useState } from "react";
const offer = [
	{ title: "Smart Domy", desc: "Zajmujemy się instalacjami smart dom." },
	{
		title: "Usuwanie awarii 24H/7",
		desc: "Usuwanie awarii elektrycznych w domach jedno oraz wielo-rodzinnych",
	},
	{
		title: "CCTV is systemy alarmowe",
		desc: "kompleksowa instalacja oraz konfiguracja systemów CCTV oraz instalacji alarmowych, kontroli dostępu",
	},

	{
		title: "Montaż oraz serwis domofonów i wideo domofonów",
		desc: "Posiadamy duże doświadczenie przy pracy z domofonami, zarówno instalacją jak i konfiguracją",
	},
	{
		title: "Zakładanie oraz remont instalacji elektrycznej",
		desc: "Montaż urządzeń elektrycznych, biały montaż, przyłącza, Pomiary elektryczne, instalacje odgromowye",
	},
	{
		title: "Naprawy oraz instalacje",
		desc: "podłączanie płyt indukcyjnych Naprawa gniazdek oraz włączników",
	},
];
export const Offer = () => {
	// const [SlideInStatus, setSlideInStatus] = useState(false);
	// useEffect(() => {
	// 	const el = document.getElementsByClassName("Offerie")[0];
	// 	console.log(el);
	// 	const observ = new IntersectionObserver(([entry]) => {
	// 		console.log(entry.isIntersecting);
	// 		setSlideInStatus(entry.isIntersecting), { root: el, threshold: 1.0 };
	// 		// entry.isIntersecting ? observ.unobserve(el) : null;
	// 	});
	// 	observ.observe(el);
	// }, []);
	return (
		<div
			id="Offer"
			className="Offer"
			// style={{ animation: SlideInStatus ? "slide-top 2s" : "none" }}
		>
			<ImgHolder src="/miernik.svg" className="OfferImg" />
			<h1 className="Heading">Usługi elektryczne</h1>
			<div>
				{offer.map((x) => {
					return <Offerie title={x.title} desc={x.desc} key={x.title} />;
				})}
			</div>
		</div>
	);
};
