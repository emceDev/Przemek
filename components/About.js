const thingies =
	"- inteligentnymi instalacjami domowymi tak zwane inteligentne domy - montażem domofonów i wideo domofonów - usuwanie awarii 24H/7 - pomiary elektryczne - modernizacją rozdzielni- montażem gniazd, włączników, biały montaż- instalacjami elektrycznymi w budynkach jedno i wielorodzinnych- składanie rozdzielnic- przyłącza - podłączanie płyt indukcyjnych- instalacje alarmowe- montaż oraz uruchomienie kontroli dostępu- monitoringiem CCTV- instalacjami odgromowymi";
let txt = thingies.replace(/-/g, "\n•");
import Image from "next/image";
import { ImgHolder } from "./comps/ImgHolder";
export const About = () => {
	return (
		<div className="About">
			<h1 className="Heading">O nas</h1>
			<p>
				JPD System świadczy profesjonalne, niezawodne i bezpieczne usługi
				elektryczne w miejscowości Warszawa i okolice. Zajmujemy się:
				<br />
				{/* {thingies.split("-").map((text) => (
					<div>{text}</div>
				))} */}
				{/* <div style={{ padding: "1vh 0vw 0vw 5vw" }}>{txt}</div> */}
			</p>
			<ImgHolder src="/team.png" className="AboutImg" />
		</div>
	);
};
