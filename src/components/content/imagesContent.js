import React, {useState, useEffect} from 'react';
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import Gallery from "../gallery/gallery";
import Header from "../header/header";
import {getCollection} from "../../ services/api/APIget/getMethod";

const ImagesContent = (props) => {

    const [imagesList, setImagesList] = useState([]);

    useEffect(()=>{
        getCollection(props.page, 'items').then(response =>{
             setImagesList(response);
        });
    }, [props.page]);

    return (
        <section className="images-content">
            <Sidebar></Sidebar>
            <Header/>
                <div className={'container-fluid'}>
                    {!imagesList ? null : <Gallery elements={imagesList}/>}
                </div>
            <Footer></Footer>
        </section>
    )
};

export default ImagesContent;
