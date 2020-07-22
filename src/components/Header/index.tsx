import React, { useCallback, useState, useEffect } from 'react';
import { Form } from '@unform/web';
import { FaSearch } from 'react-icons/fa';

import InputSearch from '../InputSearch';

import { Container, WrapperForm, Profile } from './styles';

import api from '../../services/api';

interface MeProps {
  display_name: string;
}

const Header: React.FC = () => {
  const [me, setMe] = useState({} as MeProps);

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  useEffect(() => {
    async function handleLoadUserLogged(): Promise<void> {
      const response = await api.get<MeProps>('me');
      setMe(response.data);
    }

    handleLoadUserLogged();
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

        <Profile>
          <div className="info">
            <p>
              HELLO, <strong>{me.display_name}</strong>
            </p>
            <span>PREMIUM</span>
          </div>
          <img src="" alt="You" />
        </Profile>
      </WrapperForm>
    </Container>
  );
};

export default Header;
