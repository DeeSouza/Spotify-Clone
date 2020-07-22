import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { FaSearch } from 'react-icons/fa';

import InputSearch from '../InputSearch';

import { Container, WrapperForm } from './styles';

const Header: React.FC = () => {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <WrapperForm>
        <Form onSubmit={handleSubmit}>
          <InputSearch
            icon={FaSearch}
            name="query"
            placeholder="SEARCH SOMETHING"
          />
        </Form>
      </WrapperForm>
    </Container>
  );
};

export default Header;
