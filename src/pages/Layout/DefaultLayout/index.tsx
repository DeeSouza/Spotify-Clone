import React from 'react';

import SidebarLeft from '../../../components/SidebarLeft';
import Seekbar from '../../../components/Seekbar';

import { Container, Content } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>
        <SidebarLeft />

        {children}
      </Content>

      <Seekbar />
    </Container>
  );
};

export default DefaultLayout;
