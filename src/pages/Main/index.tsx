import React from 'react';

import { Container } from './styles';

import SidebarLeft from '../../components/SidebarLeft';

const Main: React.FC = () => {
  return (
    <Container>
      <SidebarLeft />
    </Container>
  );
};

export default Main;
