import React, { useState, useContext, createContext, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import qs from 'querystring';

import api from '../services/authorize';

interface AuthContextData {
  signIn(): Promise<void>;
  signOut(): void;
}

interface ResponseData {
  access_token: string;
  refresh_token: string;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const location = useLocation();
  const [, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem('@SpotifyWebDee:access_token');
    const refreshToken = localStorage.getItem('@SpotifyWebDee:refresh_token');

    if (accessToken) {
      api.defaults.headers.authorization = `Bearer ${accessToken}`;

      return {
        accessToken,
        refreshToken,
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async () => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');

    if (!code) return;

    const bodyParams = {
      code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000',
    };

    const response = await api.post<ResponseData>(
      'api/token',
      qs.stringify(bodyParams),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    const { access_token, refresh_token } = response.data;

    localStorage.setItem('@SpotifyWebDee:access_token', access_token);
    localStorage.setItem('@SpotifyWebDee:refresh_token', refresh_token);

    api.defaults.headers.authorization = `Bearer ${access_token}`;

    setData({
      accessToken: access_token,
      refreshToken: refresh_token,
    });
  }, [location.search]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SpotifyWebDee:access_token');
    localStorage.removeItem('@SpotifyWebDee:refresh_token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
