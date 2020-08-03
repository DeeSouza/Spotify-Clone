import React from 'react';

import SidebarLeft from '../../../components/SidebarLeft';
import SidebarRight from '../../../components/SidebarRight';
import Seekbar from '../../../components/Seekbar';
import Header from '../../../components/Header';

import { Container, WrapperContent, Content } from './styles';

interface IProps {
  toggleTheme(): void;
}

const DefaultLayout: React.FC<IProps> = ({ children, toggleTheme }) => {
  return (
    <Container>
      <WrapperContent>
        <SidebarLeft />

        <Content>
          <Header toggleTheme={toggleTheme} />

          {children}
        </Content>

        <SidebarRight />
      </WrapperContent>

      <Seekbar />
    </Container>
  );
};

export default DefaultLayout;
