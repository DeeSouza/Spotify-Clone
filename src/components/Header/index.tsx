import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Form } from '@unform/web';
import { FaSearch } from 'react-icons/fa';

import InputSearch from '../InputSearch';

import { useAuth } from '../../hooks/auth';

import { Container, WrapperForm, Profile } from './styles';

const Header: React.FC = () => {
  const { signIn } = useAuth();
  const location = useLocation();

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  const handleSignIn = useCallback(() => {
    const urlAuthorize = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email&state=34fFs29kd09`;

    const windowSignIn = window.open(
      urlAuthorize,
      'Sign In Spotify',
      'width=500, height=500',
    );

    if (windowSignIn) {
      windowSignIn.opener.location.reload(true);
      windowSignIn.close();
    }
  }, []);

  useEffect(() => {
    signIn();
  }, [signIn, location.search]);

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
            <button type="button" onClick={handleSignIn}>
              Sign In
            </button>
            <span>PREMIUM</span>
          </div>
        </Profile>
      </WrapperForm>
    </Container>
  );
};

export default Header;
