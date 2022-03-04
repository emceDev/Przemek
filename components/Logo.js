import { Navigation } from "./comps/Navigation";
import Image from "next/image";
import { ImgHolder } from "./comps/ImgHolder";
const style = { backgroundColor: "red" };
export const Logo = (props) => {
	return (
		<div className="Logo">
			<h1>JPD system</h1>

			<ImgHolder src="/miernik.svg" className="LogoImg" />
		</div>
	);
};
