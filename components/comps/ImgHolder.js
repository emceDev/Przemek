import Image from "next/image";
export const ImgHolder = (props) => {
	return (
		<div
			style={{
				position: "absolute",
				top: "0px",
				left: "0px",
				width: "100%",
				height: "100%",
			}}
		>
			<div
				className={props.className}
				style={{
					position: "absolute",
				}}
			>
				<Image src={props.src} layout="fill" />
			</div>
		</div>
	);
};
