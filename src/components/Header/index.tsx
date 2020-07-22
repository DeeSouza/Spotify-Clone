import React from 'react';

import { Container, WrapperForm } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <WrapperForm>
        <form>
          <input name="query" placeholder="SEARCH SOMETHING" />
        </form>
      </WrapperForm>
    </Container>
  );
};

export default Header;
