import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
import checked from "./checked.svg";
import ImageZoom from "react-medium-image-zoom";

const imagesForHome = ['./images/E_Summit/DSC_0031.jpeg', './images/E_Summit/DSC_0049.jpeg', './images/E_Summit/DSC_0071.jpeg', './images/E_Summit/DSC_0007.jpeg', './images/E_Summit/DSC_0077.jpeg', './images/Awareness/11.jpg' ];
const imagesForInternshipFair = ['./images/Internship_Drive/IMG_20180407_115627.jpeg', './images/Internship_Drive/IMG_20180407_115629.jpeg',  './images/Internship_Drive/IMG_20180407_115644.jpeg', './images/Internship_Drive/IMG_20180407_115848.jpeg','./images/Internship_Drive/IMG_20180407_111316.jpeg' , './images/Internship_Drive/IMG_20180407_111334.jpeg', './images/Internship_Drive/IMG_20180407_111945.jpeg', './images/Internship_Drive/IMG_20180407_112328.jpeg', './images/Internship_Drive/IMG_20180407_114644.jpeg', './images/Internship_Drive/IMG_20180407_114711.jpeg', './images/Internship_Drive/IMG_20180407_114750.jpeg', './images/Internship_Drive/IMG_20180407_115644.jpeg', './images/Internship_Drive/IMG_20180407_115848.jpeg', './images/Internship_Drive/IMG_20180407_111056.jpeg', './images/Internship_Drive/IMG_20180407_111316.jpeg', './images/Internship_Drive/IMG_20180407_111334.jpeg', './images/Internship_Drive/IMG_20180407_111945.jpeg', './images/Internship_Drive/IMG_20180407_112328.jpeg', './images/Internship_Drive/IMG_20180407_115606.jpeg', './images/Internship_Drive/IMG_20180407_115609.jpeg', './images/Internship_Drive/IMG_20180407_115629.jpeg', './images/Internship_Drive/IMG_20180407_112541.jpeg', './images/Internship_Drive/IMG_20180407_113459.jpeg', './images/Internship_Drive/IMG_20180407_113909.jpeg', './images/Internship_Drive/IMG_20180407_114644.jpeg', './images/Internship_Drive/IMG_20180407_114711.jpeg', './images/Internship_Drive/IMG_20180407_114750.jpeg', './images/Internship_Drive/IMG_20180407_115606.jpeg', './images/Internship_Drive/IMG_20180407_115609.jpeg'];
const imagesForAwareness = ['./images/Awareness/1.jpg', './images/Awareness/2.jpg', './images/Awareness/3.jpg', './images/Awareness/4.jpg', './images/Awareness/5.jpg', './images/Awareness/6.jpg', './images/Awareness/7.jpg', './images/Awareness/10.jpg', './images/Awareness/11.jpg', './images/Awareness/12.jpg'];
const imagesForFelicitation = ['./images/Felicitation/1.jpg', './images/Felicitation/2.jpg', './images/Felicitation/3.jpg', './images/Felicitation/4.jpg', './images/Felicitation/5.jpg', './images/Felicitation/6.jpg', './images/Awareness/7.jpg', './images/Felicitation/10.jpg', './images/Felicitation/11.jpg', './images/Felicitation/12.jpg', './images/Felicitation/13.jpg', './images/Felicitation/14.jpg', './images/Felicitation/14.jpg', './images/Felicitation/15.jpg', './images/Felicitation/16.jpg', './images/Felicitation/17.jpg', './images/Felicitation/18.jpg', './images/Felicitation/19.jpg', './images/Felicitation/20.jpg'];
const imagesForEsummit = ['./images/E_Summit/DSC_0005.jpeg', './images/E_Summit/DSC_0007.jpeg', './images/E_Summit/DSC_0026.jpeg', './images/E_Summit/DSC_0027.jpeg', './images/E_Summit/DSC_0028.jpeg', './images/E_Summit/DSC_0031.jpeg', './images/E_Summit/DSC_0032.jpeg', './images/E_Summit/DSC_0035.jpeg', './images/E_Summit/DSC_0038.jpeg', './images/E_Summit/DSC_0039.jpeg', './images/E_Summit/DSC_0045.jpeg', './images/E_Summit/DSC_0049.jpeg', './images/E_Summit/DSC_0053.jpeg', './images/E_Summit/DSC_0066.jpeg', './images/E_Summit/DSC_0077.jpeg', './images/E_Summit/DSC_0081.jpeg', './images/E_Summit/DSC_0010.jpeg', './images/E_Summit/DSC_0020.jpeg', './images/E_Summit/DSC_0021.jpeg', './images/E_Summit/DSC_0023.jpeg', './images/E_Summit/DSC_0024.jpeg', './images/E_Summit/DSC_0025.jpeg', './images/E_Summit/DSC_0030.jpeg', './images/E_Summit/DSC_0041.jpeg', './images/E_Summit/DSC_0042.jpeg', './images/E_Summit/DSC_0043.jpeg', './images/E_Summit/DSC_0068.jpeg', './images/E_Summit/DSC_0069.jpeg', './images/E_Summit/DSC_0070.jpeg', './images/E_Summit/DSC_0071.jpeg', './images/E_Summit/DSC_0072.jpeg', './images/E_Summit/DSC_0094.jpeg', './images/E_Summit/DSC_0102.jpeg', './images/E_Summit/DSC_0108.jpeg'] ;

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			images: imagesForHome.slice(),
			inGallery: false
		};
	}

	componentDidMount() {
		const Navs = document.getElementById("header-navs").childNodes;
		Navs.forEach(nav => nav.classList.remove("activeNav"));
		document.getElementById("gallery").classList.add("activeNav");

		if (this.props.match !== undefined) {
			if (this.props.match.path === "/gallery") {
				this.setState({
					images: [
						...imagesForHome,
						...imagesForEsummit,
						...imagesForInternshipFair,
						...imagesForAwareness,
						...imagesForFelicitation
					],
					inGallery: true
				});
			}
		}
	}

	renderImages = () => {
		const renderImageArr = this.state.images.map((image, i) => {
			console.log(image);
			return (
				<div className="gallery-imageBox" key={i}>
					<ImageZoom
						image={{
							src: process.env.PUBLIC_URL + `${image}`,
							alt: "ecell msit",
							className: "gallery-image"
						}}
						zoomImage={{
							src: image,
							alt: "ecell msit"
						}}
					/>
				{/* <img src={} alt="" /> */}
				</div>
			);
		});
		return renderImageArr;
	};
	updateImages = target => {
		const allFilters = target.parentNode.childNodes;
		allFilters.forEach(filter => filter.classList.remove("activeFilter"));
		target.classList.add("activeFilter");
		switch (target.id) {
			case "sel-all":
				this.setState({
					images: [
						...imagesForHome,
						...imagesForEsummit,
						...imagesForInternshipFair,
						...imagesForAwareness,
						...imagesForFelicitation
					]
				});
				break;
			case "sel-esummit":
				this.setState({
					images: imagesForEsummit.slice()
				});
				break;
			case "sel-internship":
				this.setState({
					images: imagesForInternshipFair.slice()
				});
				break;
			case "sel-felicitation":
				this.setState({
					images: imagesForFelicitation.slice()
				});
				break;
			case "sel-awareness":
				this.setState({
					images: imagesForAwareness.slice()
				});
				break;
			default:
				break;
		}
	};
	render() {
		const { inGallery } = this.state;
		if (!inGallery) {
			return (
				<section className="gallery-section">
					<div className="heading"> Gallery</div>
					<div className="gallery">{this.renderImages()}</div>
					<div style={{ textAlign: "center" }}>
						<Link to="/gallery">
							<button className="button-dark-1 LinkButton">
								See All Images
							</button>
						</Link>
					</div>
				</section>
			);
		}
		return (
			<section className="gallery-section">
				<div className="heading"> Gallery 2k18</div>
				<ul className="filter">
					<li
						className="filter-item button-dark-1 activeFilter"
						onClick={e => this.updateImages(e.target)}
						id="sel-all"
					>
						All{" "}
						<img
							className="checksvg"
							alt="check svg"
							src={checked}
						/>{" "}
					</li>
					<li
						className="filter-item button-dark-1"
						onClick={e => this.updateImages(e.target)}
						id="sel-esummit"
					>
						E-Summit{" "}
						<img
							className="checksvg"
							alt="check svg"
							src={checked}
						/>{" "}
					</li>
					<li
						className="filter-item button-dark-1"
						onClick={e => this.updateImages(e.target)}
						id="sel-internship"
					>
						Internship Fair{" "}
						<img
							className="checksvg"
							alt="check svg"
							src={checked}
						/>{" "}
					</li>
					<li
						className="filter-item button-dark-1"
						onClick={e => this.updateImages(e.target)}
						id="sel-awareness"
					>
						Entrepreneurship Awareness Camp{" "}
						<img
							className="checksvg"
							alt="check svg"
							src={checked}
						/>{" "}
					</li>
					<li
						className="filter-item button-dark-1"
						onClick={e => this.updateImages(e.target)}
						id="sel-felicitation"
					>
						Felicitation Ceremony{" "}
						<img
							className="checksvg"
							alt="check svg"
							src={checked}
						/>{" "}
					</li>
				</ul>
				<div className="gallery">{this.renderImages()}</div>
			</section>
		);
	}
}

export default Gallery;
