import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';





// ...

function props() {
  return (

    
    <Menu>
      <a className="menu-item" href='/'>
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/clothes">
        Clothes
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default props;