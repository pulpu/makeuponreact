import React, {Component} from 'react';
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";

class Home extends Component {
  render() {
    return (
    <div className="home">
      <Sidebar></Sidebar>
      Home
      <Footer></Footer>
    </div>
    )};
}

export default Home;
