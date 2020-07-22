import React from 'react';

import SidebarLeft from '../../../components/SidebarLeft';
import SidebarRight from '../../../components/SidebarRight';
import Seekbar from '../../../components/Seekbar';
import Header from '../../../components/Header';

import { Container, WrapperContent, Content } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <WrapperContent>
        <SidebarLeft />

        <Content>
          <Header />

          {children}
        </Content>

        <SidebarRight />
      </WrapperContent>

      <Seekbar />
    </Container>
  );
};

export default DefaultLayout;
