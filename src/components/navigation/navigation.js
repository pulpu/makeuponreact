import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MyContext from "../../mycontext";


const Navigation = (props)=> {
  const [ navToggle, setNavToggle] = useState(true);
  const {infoCategoryState, openCategoryInfo} = React.useContext(MyContext);


  const test = () => {
    console.log('infoCategoryState', infoCategoryState)
  };

  const toggleButton = ()=> {
    setNavToggle(!navToggle)
  };

    return (
      <div>
        <button className="nav__toggle"  onClick={toggleButton}></button>
        <nav className={navToggle ? 'nav nav--active' : 'nav'}>
          <div className="nav__wrapper">
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><Link onClick={()=>{toggleButton(); openCategoryInfo()}} to="/cover">Cover</Link></span>
                </div>
              </div>
            </div>
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><Link onClick={()=>{toggleButton(); openCategoryInfo()}} to="/brides">Brides</Link></span>
                </div>
              </div>
            </div>
            <div className="nav__item">
              <div className="nav__item-outer">
                <div className="nav__item-inner">
                  <span className="nav__title"><span  onClick={test}>nav title 3</span></span>
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
