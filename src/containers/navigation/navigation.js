import React, {Component} from 'react';



class Navigation extends Component {
  render() {
    return (
      <div>
        <button className="nav__toggle"></button>
        <nav className="nav">
          <div className="nav__wrapper">
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><span>nav title 1</span></span>
                </div>
              </div>
            </div>  
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><span>nav title 2</span></span>
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
