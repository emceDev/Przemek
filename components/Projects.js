import Carousel from "react-elastic-carousel";
import Image from "next/image";
const vsvg = "/vercel.svg";
const realisations = [
	{
		id: 1,
		title: "Tytuł",
		description:
			"Z czasem pojawiły się w sieci archiwa tekstów klasycznych, religijnych, z zakresu historii, humanistyki, biblioteki poetyckie czy poświęcone wyłącznie twórczości kobiet. Oddzielną grupę stanowią elektroniczne wersje ency",
		image: "/installation.jpg",
	},
	{
		id: 2,
		title: "dwa",
		description:
			"Z czasem pojawiły się w sieci archiwa tekstów klasycznych, religijnych, z zakresu historii, humanistyki, biblioteki poetyckie czy poświęcone wyłącznie twórczości kobiet. Oddzielną grupę stanowią elektroniczne wersje ency",
		image: "/installation2.jpg",
	},
	{
		id: 3,
		title: "trzy",
		description:
			"Z czasem pojawiły się w sieci archiwa tekstów klasycznych, religijnych, z zakresu historii, humanistyki, biblioteki poetyckie czy poświęcone wyłącznie twórczości kobiet. Oddzielną grupę stanowią elektroniczne wersje ency",
		image: "/installation3.jpg",
	},
	{
		id: 4,
		title: "cztery",
		description:
			"Z czasem pojawiły się w sieci archiwa tekstów klasycznych, religijnych, z zakresu historii, humanistyki, biblioteki poetyckie czy poświęcone wyłącznie twórczości kobiet. Oddzielną grupę stanowią elektroniczne wersje ency",
		image: vsvg,
	},
	{
		id: 5,
		title: "pięć",
		description:
			"Z czasem pojawiły się w sieci archiwa tekstów klasycznych, religijnych, z zakresu historii, humanistyki, biblioteki poetyckie czy poświęcone wyłącznie twórczości kobiet. Oddzielną grupę stanowią elektroniczne wersje ency",
		image: vsvg,
	},
];
export const Projects = () => {
	return (
		<div id="Projects" className="Projects">
			<h1 className="Heading">Projekty:</h1>

			<Carousel itemsToShow={1} outerSpacing={0}>
				{realisations.map((r) => {
					return Project(r.id, r.title, r.description, r.image);
				})}
			</Carousel>
		</div>
	);
};

const Project = (id, title, description, image) => {
	return (
		<div id={id} key={id} className="Project">
			<div className="ProjectImgContainer">
				<Image src={image} layout="fill" objectFit="contain" alt={title} />
			</div>
			<div className="ProjectContent">
				<h3 style={{ zIndex: "100", position: "relative" }}>{title}</h3>
				<p style={{ color: "white", zIndex: "100", position: "relative" }}>
					{description}
				</p>
			</div>
		</div>
	);
};
