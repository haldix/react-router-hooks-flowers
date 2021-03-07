import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active' to='/about'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active' to='/gallery'>
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active' to='/create'>
            Add Image
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
