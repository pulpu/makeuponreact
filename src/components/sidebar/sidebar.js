import React, {Component} from 'react';
import Navigation from '../navigation/navigation'
import Footer from '../footer/footer'
import Logo from '../logo/logo'



class Sidebar extends Component {
  render() {
    return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <Logo></Logo>
        <Navigation></Navigation>
        <Footer></Footer>
      </div>
    </div>
    )};
}

export default Sidebar;
