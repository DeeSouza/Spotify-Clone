import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaSpotify,
  FaHeadphones,
  FaMicrophone,
  FaMapMarked,
  FaSlidersH,
  FaUndo,
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
          <Link to="/">
            <FaHeadphones size={20} color="gray" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaMicrophone size={20} color="gray" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaMapMarked size={20} color="gray" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaSlidersH size={20} color="gray" />
          </Link>
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
