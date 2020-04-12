import React from 'react';

const Home = (props) => {
    imagesLoaded(document.body, () => document.body.classList.remove('loading'));

    const spriteImages = document.querySelectorAll( '.slide-item__image' );
    const spriteImagesSrc = [];
    const texts = [];

    for ( let i = 0; i < spriteImages.length; i++ ) {

        let img = spriteImages[i];
        // Set the texts you want to display to each slide
        // in a sibling element of your image and edit accordingly
        if ( img.nextElementSibling ) {
            texts.push(img.nextElementSibling.innerHTML);
        } else {
            texts.push('');
        }
        spriteImagesSrc.push( img.getAttribute('src' ) );

    }

    const initCanvasSlideshow = new CanvasSlideshow({
        sprites: spriteImagesSrc,
        displacementImage: 'img/dmaps/512x512/crystalize.jpg',
        autoPlay: false,
        displaceScale: [300, 300],
        fullScreen: true,
        texts: texts,
        textColor: "#224d94",
        centerSprites: true,
        wacky: true
    });


    return (
        <div className="home">
            <div className="content">
                <div className="slide-wrapper">
                    <div className="slide-item">
                        <img src="https://api.time.com/wp-content/uploads/2018/08/bride-wades-down-aisle-in-phillippines-flood.jpg?w=800&quality=85" className="slide-item__image"/>
                            <h3 className="slide-item__title">Aesthetics</h3>
                    </div>
                    <div className="slide-item">
                        <img src="https://i2-prod.mirror.co.uk/incoming/article18558222.ece/ALTERNATES/s810/0_Beautiful-bride-in-white-dress-posing-on-sea-and-mountains-in-background.jpg" className="slide-item__image"/>
                            <h3 className="slide-item__title">Creativity</h3>
                    </div>
                </div>
                <button className="scene-nav scene-nav--prev" data-nav="previous">
                    <svg className="icon icon--arrow-nav-prev">
                        <use xlink:href="#icon-arrow-nav"></use>
                    </svg>
                </button>
                <button className="scene-nav scene-nav--next" data-nav="next">
                    <svg className="icon icon--arrow-nav-next">
                        <use xlink:href="#icon-arrow-nav"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Home;
