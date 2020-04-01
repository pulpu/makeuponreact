import React, {useState, useEffect} from 'react';
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import Intro from "../intro/intro";
import {getCollection} from "../../ services/api/APIget/getMethod";
import SimpleReactLightbox from "simple-react-lightbox";
import { LinearProgress } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';


const ImagesContent = (props) => {
    const [imagesList, setImagesList]           = useState(null);
    const [paragraphInfo, setParagraphInfo]     = useState([]);
    const [show, setShow] = React.useState(false);
    const [lastElement, setLastElement] = React.useState(null);

    useEffect(()=>{
        setImagesList(null);
        getCollection(props.page, 'items','order', 10, null).then(response =>{
            if(response.length) {
                setLastElement( response[response.length-1]['lastElement'])
                setImagesList(response);
            }
        });
        getCollection(props.page, 'paragraph').then(response =>{
            setParagraphInfo(response);
        });
        setShow(false);
    }, [props.page]);

    const handleLayoutComplete =(laidOutItems) => {
        if(laidOutItems.length) {
            setShow(true);
        }
    };

    const scrollElement = () => {
        getCollection(props.page, 'items','order', 4, lastElement).then(response =>{
           if(typeof response[response.length-1] !== 'undefined') {
               setLastElement( response[response.length-1].lastElement)
               setImagesList(imagesList.concat(response));
           }
        });
    };

    return (
        <section className="images-content" id="wrapScroll">
            <Sidebar/>
            <Header/>
            {paragraphInfo.length  ?  <Intro info={paragraphInfo[0]} show={show}  /> :  <LinearProgress variant="query" /> }
            <div className={'container-fluid'} >
            {imagesList ?
                <InfiniteScroll
                    dataLength={imagesList.length}
                    next={scrollElement}
                    hasMore={true}
                >
                    <SimpleReactLightbox>
                        <Gallery elements={imagesList} handleLayoutComplete={handleLayoutComplete} show={show} />
                    </SimpleReactLightbox>
                </InfiniteScroll> : null}
            </div>
            <Footer></Footer>
        </section>
    )
};

export default ImagesContent;
