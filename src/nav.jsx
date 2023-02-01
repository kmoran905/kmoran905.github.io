import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Nav = ({

    outerContainerId,
    pageWrapId,
  
  }) => {
  
    return (
  
      //don't forget to pass the props down into the Menu component itself!
      <Menu pageWrapId={pageWrapId} outerContainerId={outerContainerId}>
            <Link id="home" className="menu-item" to="/">
            Home
            </Link>
            <Link id="about" className="menu-item" to="/about">
            About
            </Link>
            <Link id="clothes" className="menu-item" to="/clothes">
            Clothes
            </Link>
            <Link id="contact" className="menu-item" to="/contact">
            Contact
            </Link>
      </Menu>
    );
  };

  export default Nav;