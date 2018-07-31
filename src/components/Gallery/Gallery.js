import React from 'react';
import {Link} from 'react-router-dom';
import './Gallery.css';
import checked from './checked.svg';

const imagesForHome = ['https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29497735_889588544578976_8308239433050098694_n.jpg?_nc_cat=0&oh=465dd2e41f11191b6cbee13daa57abfa&oe=5BC72FAD',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/21686478_797397623798069_8022458416660516926_n.jpg?_nc_cat=0&oh=c010e5835ccad8ec4aa7cebfdc3f68b9&oe=5BCC69CA',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29542573_889589374578893_611719448687624233_n.jpg?_nc_cat=0&oh=ff9d29f301aec6792bb409b5b91cfe0e&oe=5BC9A36C',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29571327_890846581119839_8454119830759372181_n.jpg?_nc_cat=0&oh=2a3b065dcbb69af091bc9cc88108e641&oe=5C06B3D5',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29496883_889588474578983_3981695893552861033_n.jpg?_nc_cat=0&oh=5eaa32d3cf2e5a1ed120e86dc7b08c83&oe=5BC79082',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/21557965_797397373798094_2597689562781078340_n.jpg?_nc_cat=0&oh=104a797b558edf9dad89efbebbb339cb&oe=5BC5C463'
					];
const imagesForGallery = ['https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29497735_889588544578976_8308239433050098694_n.jpg?_nc_cat=0&oh=465dd2e41f11191b6cbee13daa57abfa&oe=5BC72FAD',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/21686478_797397623798069_8022458416660516926_n.jpg?_nc_cat=0&oh=c010e5835ccad8ec4aa7cebfdc3f68b9&oe=5BCC69CA',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29542573_889589374578893_611719448687624233_n.jpg?_nc_cat=0&oh=ff9d29f301aec6792bb409b5b91cfe0e&oe=5BC9A36C',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29571327_890846581119839_8454119830759372181_n.jpg?_nc_cat=0&oh=2a3b065dcbb69af091bc9cc88108e641&oe=5C06B3D5',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29496883_889588474578983_3981695893552861033_n.jpg?_nc_cat=0&oh=5eaa32d3cf2e5a1ed120e86dc7b08c83&oe=5BC79082',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/21557965_797397373798094_2597689562781078340_n.jpg?_nc_cat=0&oh=104a797b558edf9dad89efbebbb339cb&oe=5BC5C463'
					];
const imagesForAwareness = [
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31723261_910284805842683_5809707784903589888_n.jpg?_nc_cat=0&oh=31797e600b002ebf237a655cbea859b0&oe=5C0D9110',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31542837_910284779176019_4668262716379496448_n.jpg?_nc_cat=0&oh=d02b3cab7d3472d7671d878f57b21280&oe=5BD7362C',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31697313_910284502509380_5170703547037122560_n.jpg?_nc_cat=0&oh=7ad6d2383c5485904cfa1f2c1f0d3a21&oe=5C13C940',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31659945_910284535842710_7315778066276417536_n.jpg?_nc_cat=0&oh=06cae7396ebd8bc7bcac6967f821243c&oe=5BC5690D',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31713348_910284579176039_4681100768764231680_n.jpg?_nc_cat=0&oh=a2c1acbfab62b477daa47b65386ccc4f&oe=5BCF0E98',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31727890_910284425842721_8767203152324722688_n.jpg?_nc_cat=0&oh=a327060be46e353957ad4aa48558cc79&oe=5C0ACD00',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31655512_910284452509385_1472247967967608832_n.jpg?_nc_cat=0&oh=32a98f898d391c1ee41afeeb4f7c774a&oe=5BD99E25',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31718085_910284385842725_7217974866308235264_n.jpg?_nc_cat=0&oh=0560e4243ee6fd2399bebc7e0e8e291b&oe=5BCB2622'
					]
const imagesForFelicitation = [
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/30742337_904808763056954_270686968050876416_n.jpg?_nc_cat=0&oh=99f626b04d49ec6c2cf6469eea9e21f5&oe=5BCDD2C0',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/30762995_904808666390297_7547271340332417024_n.jpg?_nc_cat=0&oh=27b52941d4fc8d50e7ae656cbb41ba23&oe=5C0BF323',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31116791_904808386390325_749457881752928256_n.jpg?_nc_cat=0&oh=a6c7c5ca292d9f9116518fbf9acbf031&oe=5BCC3255',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/30742997_904808443056986_3051930312301871104_n.jpg?_nc_cat=0&oh=c3a8ce7b187a216e3ec60b3c3b40f696&oe=5C120F4E',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/30743227_904808273057003_5624558560886128640_n.jpg?_nc_cat=0&oh=8daabf702cfd8d595fa58a7d313baf4a&oe=5C12B552',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31091832_904808229723674_3840440733949493248_n.jpg?_nc_cat=0&oh=be0ef1e0a7eec06eac1f2bd9f265e9eb&oe=5BCEDD96',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/30744029_904807723057058_7290864322496954368_n.jpg?_nc_cat=0&oh=320d1a0afe24d4c3b6787a9f73d529ee&oe=5C0B656A',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31123928_904807373057093_9200963779427303424_n.jpg?_nc_cat=0&oh=f59554eaf16a8c46c55e61ca8b68a5ca&oe=5C0D45EB',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31143856_904806953057135_6312781131099930624_n.jpg?_nc_cat=0&oh=e30c262a2b836e1f261145545eb52be4&oe=5C04CF5E',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31113542_904806699723827_9057011941842616320_n.jpg?_nc_cat=0&oh=e9a7a0917b1fe2694609a210ecd30eec&oe=5C0B9C51',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/30742846_904805353057295_869950612261830656_n.jpg?_nc_cat=0&oh=a1fac8a55bd0c20189abc6d5ea1c9045&oe=5C142324',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/31069060_904806136390550_1975193375678136320_n.jpg?_nc_cat=0&oh=0267f2cdf33b34c2b71564ded027db5b&oe=5BCE06FB',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/30743963_904806376390526_5492460098598993920_n.jpg?_nc_cat=0&oh=1288ed53683c768e386c3258b54469bb&oe=5C0DBA09'
					]
const imagesForEsummit = [
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29472424_889006794637151_1984856085726494720_n.jpg?_nc_cat=0&oh=7f395eb9c41605744cbcfd5842423d40&oe=5C0712AB',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29541986_889006897970474_8139056991214501888_n.jpg?_nc_cat=0&oh=e33b02282f362b5957d0bedca1bcee5d&oe=5BCB5383',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29497826_889589717912192_2818197080940158123_n.jpg?_nc_cat=0&oh=7cfa3b173616a2be2ffd3ea75c6e9a73&oe=5BC546D9',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29511596_889589701245527_4584783046985511786_n.jpg?_nc_cat=0&oh=ddccc59708e480f139ffd0f3697031b1&oe=5BD40082',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29541680_889589624578868_3148418172154948593_n.jpg?_nc_cat=0&oh=41cc55fa085a25568e87158d753be6c6&oe=5C0A5191',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29573215_889589461245551_4329173065860368300_n.jpg?_nc_cat=0&oh=3172445a60c0cba59982b60dd293b00b&oe=5C05E364'
					]



class Gallery extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			images: imagesForHome.slice(),
			inGallery: false
		}
	}

	componentDidMount(){
		const Navs = document.getElementById('header-navs').childNodes;
	    Navs.forEach(nav => nav.classList.remove('activeNav'))
	    document.getElementById('gallery').classList.add('activeNav');
	    
		if(this.props.match !== undefined){
			if(this.props.match.path === '/gallery'){
				this.setState({
					images: [...imagesForHome, ...imagesForEsummit, ...imagesForGallery, ...imagesForAwareness, ...imagesForFelicitation],
					inGallery: true});
			}
		}
	}

	renderImages = () => {
			const renderImageArr = this.state.images.map((image, i) => {
				return(
					<div className="gallery-imageBox" key={i}>
						<img src={image} className="gallery-image" alt=""/>
					</div>
				)
			})
			return renderImageArr;
	}
	updateImages = (target) => {
		const allFilters = target.parentNode.childNodes;
		allFilters.forEach(filter => filter.classList.remove('activeFilter'))
		target.classList.add('activeFilter');
		switch(target.id){
			case "sel-all":
				this.setState({
					images: [...imagesForHome, ...imagesForEsummit, ...imagesForGallery, ...imagesForAwareness, ...imagesForFelicitation]
				})
				break;
			case "sel-esummit":
				this.setState({
					images: imagesForEsummit.slice()
				})
				break;
			case "sel-internship":
				this.setState({
					images: imagesForGallery.slice()
				})
				break;
			case "sel-felicitation":
				this.setState({
					images: imagesForFelicitation.slice()
				})
				break;
			case "sel-awareness":
				this.setState({
					images: imagesForAwareness.slice()
				})
				break;
			default:
				break;
		}
		
	}
	render(){
		const {inGallery} = this.state;
		if(!inGallery){
			return (
		        <section className="gallery-section">
		        	<div className="heading"> Gallery</div>
		        	<div className="gallery">
		        		{this.renderImages()}
		        	</div>
		        	<div style={{textAlign: 'center'}}>
		        		<Link to="/gallery"><button className="button-dark-1 LinkButton">More Images</button></Link>
		        	</div>
		        </section>
	    	);
		}
		return (
		        <section className="gallery-section">
		        	<div className="heading"> Gallery 2k18</div>
		        	<ul className="filter">
		        		<li className="filter-item button-dark-1 activeFilter" onClick={(e) => this.updateImages(e.target)} id="sel-all">All <img className="checksvg" src={checked} /> </li>
		        		<li className="filter-item button-dark-1" onClick={(e) => this.updateImages(e.target)} id="sel-esummit">E-Summit  <img className="checksvg" src={checked} /> </li>
		        		<li className="filter-item button-dark-1" onClick={(e) => this.updateImages(e.target)} id="sel-internship">Internship Fair <img className="checksvg" src={checked} /> </li>
		        		<li className="filter-item button-dark-1" onClick={(e) => this.updateImages(e.target)} id="sel-awareness">Entrepreneurship Awareness Camp <img className="checksvg" src={checked} /> </li>
		        		<li className="filter-item button-dark-1" onClick={(e) => this.updateImages(e.target)} id="sel-felicitation">Felicitation Ceremony <img className="checksvg" src={checked} /> </li>
		        	</ul>
		        	<div className="gallery">
		        		{this.renderImages()}
		        	</div>
		        </section>
	    	);
		 
	}
   
};

export default Gallery;
