import { useEffect, useState } from "react";

export const Navigation = () => {
	const [mobile, setMobile] = useState(false);
	let filterTimeout;
	const debounce = () => {
		clearTimeout(filterTimeout);
		filterTimeout = setTimeout(() => {
			resized();
		}, 500);
	};
	const resized = () => {
		console.log("size changed", window.innerWidth);
		if (window.innerWidth < 767) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", () => {
			debounce();
		});
		if (window.innerWidth < 600) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	}, []);
	return (
		<div className="Navigation">
			<a href="#About">
				<div className="NavLogo">JPDsystem</div>
			</a>
			<div className="NavMid">
				{mobile ? null : (
					<>
						<a href="#About">
							<div>O NAS</div>
						</a>
						<a href="#Offer">
							<div>OFERTA</div>
						</a>
						<a href="#Projects">
							<div>PROJEKTY</div>
						</a>
						<a href="#Contact">
							<div>KONTAKT</div>
						</a>
					</>
				)}
			</div>
			<a href="#Contact">
				<div>WYCENA</div>
			</a>
			{mobile ? <Hamburger /> : null}
		</div>
	);
};

const Hamburger = (props) => {
	const [shown, setShown] = useState(false);
	return (
		<div className="Hamburger">
			<div className="Switch" onClick={() => setShown(!shown)}>
				<div>Menu</div>
				<div>{">"}</div>
			</div>
			<div
				className="HambList"
				style={{ display: shown ? "block" : "none" }}
				onMouseLeave={() => setShown(false)}
				onClick={() => setShown(false)}
			>
				<>
					<a href="#About">
						<div>O NAS</div>
					</a>
					<a href="#Offer">
						<div>OFERTA</div>
					</a>
					<a href="#Projects">
						<div>PROJEKTY</div>
					</a>
					<a href="#Contact">
						<div>KONTAKT</div>
					</a>
				</>
			</div>
		</div>
	);
};
