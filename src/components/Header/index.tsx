import React, { useContext, useCallback, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Form } from '@unform/web';
import Switch from 'react-switch';

import InputSearch from '../InputSearch';

import { useAuth } from '../../hooks/auth';

import { Container, WrapperForm, Profile } from './styles';

interface IProps {
  toggleTheme(): void;
}

const Header: React.FC<IProps> = ({ toggleTheme }) => {
  const { signIn } = useAuth();
  const { colors, title } = useContext(ThemeContext);
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
            <Switch
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={shade(0.45, colors.background)}
              onColor={colors.secondary}
              offHandleColor={colors.primary}
            />

            <button type="button" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
        </Profile>
      </WrapperForm>
    </Container>
  );
};

export default Header;
