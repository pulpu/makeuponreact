import React, {useState, useEffect} from 'react';
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import Intro from "../intro/intro";
import {getCollection} from "../../ services/api/APIget/getMethod";
import SimpleReactLightbox from "simple-react-lightbox";
import { LinearProgress } from '@material-ui/core';


const ImagesContent = (props) => {
    const [imagesList, setImagesList]           = useState(null);
    const [paragraphInfo, setParagraphInfo]     = useState([]);
    const [show, setShow] = React.useState(false);


    useEffect(()=>{
        setImagesList(null);
        getCollection(props.page, 'items').then(response =>{
             setImagesList(response);
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

    return (
        <section className="images-content">
            <Sidebar/>
            <Header/>
            {paragraphInfo.length  ?  <Intro info={paragraphInfo[0]} show={show}  /> :  <LinearProgress variant="query" /> }
            <div className={'container-fluid'}>
            {imagesList ?  <SimpleReactLightbox>
                                <Gallery elements={imagesList} handleLayoutComplete={handleLayoutComplete} show={show} />
                            </SimpleReactLightbox> : null}
            </div>
            <Footer></Footer>
        </section>
    )
};

export default ImagesContent;
