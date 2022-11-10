import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <dir className="app__menuitem-name">
        <p className="p__cormorant" style={{color: '#DCCA87'}}> {title}</p>
      </dir>

      <div className="app__menuitem-dash"></div>
      
      <dir className="app__menuitem-price">
        <p className="p__cormorant"> {price}</p>
      </dir>
    </div>

    <dir className="app__menuitem-sub">
      <p className="p__opensans" style={{color: '#AAA'}}>{tags}</p>
    </dir>
  </div>
);

export default MenuItem;
