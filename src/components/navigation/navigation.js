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
            <Link onClick={()=>{openCategoryInfo();navToggleAndReset()} } to="/cover" className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title">Cover</span>
                </div>
              </div>
            </Link>
            <Link onClick={()=>{openCategoryInfo();navToggleAndReset()} } to="/brides" className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title">Brides</span>
                </div>
              </div>
            </Link>
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><span>Movie</span></span>
                </div>
              </div>
            </div>
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><span>Pictorial</span></span>
                </div>
              </div>
            </div>
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><span >Contact</span></span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Navigation;
