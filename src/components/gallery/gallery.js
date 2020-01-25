import * as React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 4
};

const imagesLoadedOptions = { background: '.my-bg-image-el'}

class Gallery extends React.Component {
    render() {
        const childElements = this.props.elements.map(function(element){
            return (
                <div className="image-element-class col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-4" key={element.id}>
                    <a href={element.img} >
                        <img className={'article-image'} src={element.img} alt={element.company} />
                    </a>
                </div>
            );
        });

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Gallery;
