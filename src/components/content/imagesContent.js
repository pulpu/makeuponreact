import React, {useState, useEffect} from 'react';
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import Intro from "../intro/intro";
import {getCollection} from "../../ services/api/APIget/getMethod";

const ImagesContent = (props) => {

    const [imagesList, setImagesList]           = useState([]);
    const [paragraphInfo, setParagraphInfo]     = useState([]);

    useEffect(()=>{
        getCollection(props.page, 'items').then(response =>{
             setImagesList(response);
        });
        getCollection(props.page, 'paragraph').then(response =>{
            setParagraphInfo(response);
        });
    }, [props.page]);


    return (
        <section className="images-content">
            <Sidebar/>
            <Header/>
            {paragraphInfo.length ?  <Intro info={paragraphInfo[0]}  /> : null}
            <div className={'container-fluid'}>
            {imagesList ? <Gallery elements={imagesList}  /> : null}
            </div>
            <Footer></Footer>
        </section>
    )
};

export default ImagesContent;
