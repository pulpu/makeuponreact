import React, {useEffect} from 'react';
import Masonry from 'react-masonry-component';
import MyContext from "../../mycontext";
import {SRLWrapper} from "simple-react-lightbox";
import { LazyImageFull, ImageState } from "react-lazy-images";
import loader from '../../assets/svgs/loader.svg'
import Icon from '@material-ui/core/Icon';
import SimpleReactLightbox from "simple-react-lightbox";


const masonryOptions = {
    transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el'}

const Gallery = (props) => {
    const {infoCategoryState, toggleNav} = React.useContext(MyContext);
    const [childElements, setChildElements] = React.useState([]);
    const [destroyState, setDestroyState] = React.useState([toggleNav]);

    useEffect(()=>{
        let itemsElements = props.elements.map(function(element, _in){
            return (
                <div className="image-element col-lg-3 col-md-4 col-sm-6 col-xs-12 pb-4" key={_in} >
                    <LazyImageFull src={loader}>
                        {({ imageProps, imageState, ref }) => (
                            <span className="photo-wrap">
                                <SimpleReactLightbox>
                                <img
                                    className={'article-image'}
                                  //  src={element.img}
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
                                 </SimpleReactLightbox>
                                <span className="ltx-border-top"></span>
                                <span className="ltx-border-bottom"></span>
                                <div className="inner-content">
                                    {/*<span>*/}
                                    {/*    <Icon className="icon--add-circle">add_circle</Icon>*/}
                                    {/*</span>*/}
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
        setDestroyState(toggleNav)
    }, [props.elements]);

    return (
        <div className={!infoCategoryState ?  'remove-filter' : '' }>
            {destroyState ? null :
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
