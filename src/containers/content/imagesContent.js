import React, {Component} from 'react';
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";

class ImagesContent extends Component {

    render() {
        return (
            <section className="images-content">
                <Sidebar></Sidebar>
                <h1> === {this.props.page} ===</h1>
                <Footer></Footer>
            </section>
        )};
}

export default ImagesContent;
