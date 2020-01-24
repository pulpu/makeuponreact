import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  constructor(props) {
    super(props)
    // this.MethodGet = new GetMethod(this)
    this.state = {
      navToggle: true,
    };
    this.navToggle = this.navToggle.bind(this)
  }


  navToggle() {
    this.setState({
      navToggle: !this.state.navToggle
    })
  }

  render() {
    return (
      <div>
        <button className="nav__toggle"  onClick={this.navToggle}></button>
        <nav className={this.state.navToggle ? 'nav nav--active' : 'nav'}>
          <div className="nav__wrapper">
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><Link onClick={this.navToggle} to="/cover">Cover</Link></span>
                </div>
              </div>
            </div>  
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><Link onClick={this.navToggle} to="/brides">Brides</Link></span>
                </div>
              </div>
            </div>             
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><span>nav title 3</span></span>
                </div>
              </div>
            </div>             
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><span>nav title 4</span></span>
                </div>
              </div>
            </div>             
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><span>nav title 5</span></span>
                </div>
              </div>
            </div>          
          </div>
        </nav>
      </div>
    )};
}

export default Navigation;
