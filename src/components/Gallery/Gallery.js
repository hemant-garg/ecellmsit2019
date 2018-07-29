import React from 'react';
import './Gallery.css';

const imagesForHome = ['https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29497735_889588544578976_8308239433050098694_n.jpg?_nc_cat=0&oh=465dd2e41f11191b6cbee13daa57abfa&oe=5BC72FAD',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/21686478_797397623798069_8022458416660516926_n.jpg?_nc_cat=0&oh=c010e5835ccad8ec4aa7cebfdc3f68b9&oe=5BCC69CA',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29542573_889589374578893_611719448687624233_n.jpg?_nc_cat=0&oh=ff9d29f301aec6792bb409b5b91cfe0e&oe=5BC9A36C',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29571327_890846581119839_8454119830759372181_n.jpg?_nc_cat=0&oh=2a3b065dcbb69af091bc9cc88108e641&oe=5C06B3D5',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/29496883_889588474578983_3981695893552861033_n.jpg?_nc_cat=0&oh=5eaa32d3cf2e5a1ed120e86dc7b08c83&oe=5BC79082',
						'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/21557965_797397373798094_2597689562781078340_n.jpg?_nc_cat=0&oh=104a797b558edf9dad89efbebbb339cb&oe=5BC5C463'
					]

const renderImages = () => {
	const renderImageArr = imagesForHome.map(image => {
		return(
			<div className="gallery-imageBox">
				<img src={image} className="gallery-image" alt=""/>
			</div>
		)
	})
	return renderImageArr;
}

const Gallery = () => {
    return (
        <section className="gallery-section">
        	<div className="heading"> Gallery</div>
        	<div className="gallery">
        		{renderImages()}
        	</div>
        	<div style={{textAlign: 'center'}}>
        		<button className="button-dark-1">More Images</button>
        	</div>
        </section>
    );
};

export default Gallery;
