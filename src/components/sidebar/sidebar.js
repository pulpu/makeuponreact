import React from 'react';
import Navigation from '../navigation/navigation'

const Sidebar = (props) => {
    return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <Navigation></Navigation>
      </div>
    </div>
    )
};

export default Sidebar;
