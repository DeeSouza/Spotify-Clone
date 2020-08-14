import React, { useContext, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
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
  const { signIn, signOut, user } = useAuth();
  const { colors, title } = useContext(ThemeContext);
  const { hash } = useLocation();

  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  const handleSignIn = useCallback(() => {
    const urlAuthorize = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_URL}&scope=user-read-private%20user-read-email&state=34fFs29kd09`;
    window.location.href = urlAuthorize;
  }, []);

  useEffect(() => {
    if (hash) {
      signIn();
    }
  }, [signIn, hash]);

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
              className="customSwitch"
            />

            {user ? (
              <div className="username">
                {user.images.length > 0 ? (
                  <div className="cover">
                    <img src={user.images[0].url} alt={user.display_name} />
                  </div>
                ) : (
                  <div className="cover">
                    <img
                      src={`https://api.adorable.io/avatars/34/${user.display_name}`}
                      alt={user.display_name}
                    />
                  </div>
                )}

                <div className="profile">
                  <div>{user.display_name}</div>
                  <button type="button" onClick={signOut}>
                    <small>SIGN OUT</small>
                  </button>
                </div>
              </div>
            ) : (
              <button type="button" onClick={handleSignIn}>
                SIGN IN
              </button>
            )}
          </div>
        </Profile>
      </WrapperForm>
    </Container>
  );
};

export default Header;
