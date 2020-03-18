import React from 'react';
import { Link } from 'react-router-dom';
import MyContext from "../../mycontext";

const Navigation = (props)=> {
   const {openCategoryInfo, navToggleAndReset,toggleNav} = React.useContext(MyContext);

    return (
      <div>
        <button className="nav__toggle"  onClick={navToggleAndReset}></button>
        <nav className={toggleNav ? 'nav nav--active' : 'nav'}>
          <div className="nav__wrapper">
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><Link onClick={()=>{openCategoryInfo();navToggleAndReset()} } to="/cover">Cover</Link></span>
                </div>
              </div>
            </div>
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><Link onClick={()=>{openCategoryInfo();navToggleAndReset()} } to="/brides">Brides</Link></span>
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
                  <span className="nav__title"><span >nav title 5</span></span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navigation;
