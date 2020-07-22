import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  FaSpotify,
  FaHeadphones,
  FaMicrophone,
  FaMapMarked,
  FaSlidersH,
  FaUndo,
  FaTachometerAlt,
} from 'react-icons/fa';

import { Container, Menu, Separator } from './styles';

const SidebarLeft: React.FC = () => {
  return (
    <Container>
      <div className="logo">
        <Link to="/">
          <FaSpotify color="#05d35e" size={40} />
        </Link>
      </div>

      <Separator />

      <Menu>
        <li>
          <NavLink to="/" activeClassName="active">
            <FaTachometerAlt size={20} color="gray" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/a" activeClassName="active">
            <FaHeadphones size={20} color="gray" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/b" activeClassName="active">
            <FaMicrophone size={20} color="gray" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/c" activeClassName="active">
            <FaMapMarked size={20} color="gray" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/d" activeClassName="active">
            <FaSlidersH size={20} color="gray" />
          </NavLink>
        </li>
      </Menu>

      <Separator />

      <div className="refresh">
        <Link to="/">
          <FaUndo size={20} color="gray" />
        </Link>
      </div>
    </Container>
  );
};

export default SidebarLeft;
