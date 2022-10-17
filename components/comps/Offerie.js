import { useEffect } from "react";

export const Offerie = (props) => {
	return (
		<div className="Offerie" key={props.title} id={props.id}>
			<h2 className="OfferieHead">{props.title}</h2>
			<p className="OfferieDesc">{props.desc}</p>
		</div>
	);
};
