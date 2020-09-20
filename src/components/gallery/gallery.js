import React, {useEffect} from 'react';
import Masonry from 'react-masonry-component';
import MyContext from "../../mycontext";
import {SRLWrapper} from "simple-react-lightbox";
import { LazyImageFull, ImageState } from "react-lazy-images";
import loader from '../../assets/svgs/loader.svg'
import SimpleReactLightbox from "simple-react-lightbox";

const Gallery = (props) => {
    const masonryOptions = {
        transitionDuration: 55,
    };
    const imagesLoadedOptions = {
        thumbnails: {
            showThumbnails: false,
        },
        caption: {
            showCaption: false
        },
        buttons: {
            showAutoplayButton: false,
            showCloseButton: false,
            showDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: true,
            showPrevButton: true,
        }
    };
    const {infoCategoryState, toggleNav} = React.useContext(MyContext);
    const [childElements, setChildElements] = React.useState([]);

    useEffect(()=>{
        let itemsElements = props.elements.map(function(element, _in){
            return (
                <div className="image-element col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-4" key={_in} >
                    <LazyImageFull src={loader}>
                        {({ imageProps, imageState, ref }) => (
                            <span  className="photo-wrap"  data-attribute="SRL">
                                <img
                                    className={'article-image'}
                                    alt={'1' + element.company}
                                    {...imageProps}
                                    ref={ref}
                                    src={
                                        imageState === ImageState.LoadSuccess
                                            ? element.img
                                            : loader
                                    }
                                    style={{ opacity: ImageState.LoadSuccess ? "1" : "0.5" }}
                                />
                                <span className="ltx-border-top"></span>
                                <span className="ltx-border-bottom"></span>
                                <div className="inner-content">
                                    <h3 className="title">{element.author}</h3>
                                    <span className="post">{element.agency}</span>
                                </div>
                            </span>
                        )}
                    </LazyImageFull>
                </div>
            );
        });
        setChildElements(itemsElements)
    }, [props.elements]);

    return (
        <SimpleReactLightbox>
            <div className={!infoCategoryState ?  'remove-filter' : '' }>
                {!childElements.length ? null :
                    <div>
                        <SRLWrapper options={imagesLoadedOptions}>
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
                        </SRLWrapper >
                    </div>
                }
            </div>
        </SimpleReactLightbox>
    );
};

export default Gallery;
