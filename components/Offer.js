import { Offerie } from "./comps/Offerie";
import { ImgHolder } from "./comps/ImgHolder";
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
	return (
		<div id="Offer" className="Offer">
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
