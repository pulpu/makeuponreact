import React, {useEffect} from 'react';
import Masonry from 'react-masonry-component';
import MyContext from "../../mycontext";
import {SRLWrapper} from "simple-react-lightbox";
import { LazyImageFull, ImageState } from "react-lazy-images";
import loader from '../../assets/svgs/loader.svg'

const masonryOptions = {
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el'}

const Gallery = (props) => {
    const {infoCategoryState, toggleNav} = React.useContext(MyContext);
    const [childElements, setChildElements] = React.useState([]);

    useEffect(()=>{
        let test = props.elements.map(function(element, _in){
            return (
                <div className="image-element-class col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-4" key={_in} >
                    <LazyImageFull src={loader}>
                        {({ imageProps, imageState, ref }) => (
                        <img
                            className={'article-image'}
                          //  src={element.img}
                            alt={'1' + element.company}
                            {...imageProps}
                            ref={ref}
                            src={
                                imageState === ImageState.LoadSuccess
                                    ? element.smallImg
                                    : loader
                            }
                            style={{ opacity: ImageState.LoadSuccess ? "1" : "0.5" }}
                        /> )}
                    </LazyImageFull>
                </div>
            );
        });
        setChildElements(test)
    }, [props.elements]);



    return (
        <div className={!infoCategoryState ?  'remove-filter' : '' }>
            {toggleNav ? null :
                !childElements.length ? null :
                    <div>
                        <SRLWrapper>
                            <Masonry
                                className={props.show ? 'my-gallery-class' : 'hidden'} // default ''
                                elementType={'div'} // default 'div'
                                options={masonryOptions} // default {}
                                disableImagesLoaded={false} // default false
                                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                                imagesLoadedOptions={imagesLoadedOptions} // default {}
                                onLayoutComplete={laidOutItems => props.handleLayoutComplete(laidOutItems)}
                            >
                                {childElements}
                            </Masonry>
                        </SRLWrapper>
                    </div>

            }
        </div>
    );
};

export default Gallery;
