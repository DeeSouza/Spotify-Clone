import React, { useCallback, useState, useEffect } from 'react';
import qs from 'querystring';

import { useLocation } from 'react-router-dom';
import { Form } from '@unform/web';
import { FaSearch } from 'react-icons/fa';

import InputSearch from '../InputSearch';

import { Container, WrapperForm, Profile } from './styles';
import api from '../../services/authorize';

const Header: React.FC = () => {
  const location = useLocation();

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    async function loadAuthorize(): Promise<void> {
      const bodyParams = {
        code,
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:3000',
      };

      const response = await api.post('api/token', qs.stringify(bodyParams), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      console.log(response.data);
    }

    loadAuthorize();
  }, [location.search]);

  const urlAuthorize = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email&state=34fFs29kd09`;

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
              <a href={urlAuthorize}>Sign In</a>
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
