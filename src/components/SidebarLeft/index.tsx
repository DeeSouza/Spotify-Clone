import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [linkClicked, setLinkClicked] = useState(1);

  const handleLinkClicked = useCallback((index: number) => {
    setLinkClicked(index);
  }, []);

  return (
    <Container>
      <div className="logo">
        <Link to="/">
          <FaSpotify color="#05d35e" size={40} />
        </Link>
      </div>

      <Separator />

      <Menu active={linkClicked}>
        <li>
          <Link to="/" onClick={() => handleLinkClicked(1)}>
            <FaTachometerAlt size={20} color="gray" />
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleLinkClicked(2)}>
            <FaHeadphones size={20} color="gray" />
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleLinkClicked(3)}>
            <FaMicrophone size={20} color="gray" />
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleLinkClicked(4)}>
            <FaMapMarked size={20} color="gray" />
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => handleLinkClicked(5)}>
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
