import { Offerie } from "./comps/Offerie";
import { ImgHolder } from "./comps/ImgHolder";
const offer = [
	{
		title: "Instalacja oświetlenia",
		desc: "Potrzebny Ci ktoś, kto pomoże w naprawie lub remoncie instalacji elektrycznej itp? Instalacja oświetlenia oraz prace z tym związane to mój konik. Gwarantuję doskonałe efekty. Niezależnie od projektu jestem gotowy do pomocy. Zadzwoń do mnie, aby umówić się na spotkanie i otrzymać bezpłatną wycenę. Odpowiem również na wszelkie pytania dotyczące tego, jak pracuję i czego się spodziewać podczas mojej wizyty.",
	},
	{
		title: "Naprawa gniazdek",
		desc: "Naprawa gniazdek oraz włączników to coś, co spędza Ci sen z powiek? Zrobię to za Ciebie! Dostarczę materiały i pracowników do każdego projektu, więc Naprawa  przestanie być problemem. Prowadzę prace naprawcze i instalacyjne , korzystając ze swojego bogatego doświadczenia i umiejętności technicznych, aby zapewnić Ci najlepszą obsługę z możliwych. Skontaktuj się ze mną, aby uzyskać więcej informacji lub umówić się na spotkanie.",
	},
];
export const Offer = () => {
	return (
		<div className="Offer">
			<ImgHolder src="/miernik.svg" className="OfferImg" />
			<h1 className="Heading">Oferta</h1>
			<div>
				{offer.map((x) => {
					return <Offerie title={x.title} desc={x.desc} />;
				})}
			</div>
		</div>
	);
};
