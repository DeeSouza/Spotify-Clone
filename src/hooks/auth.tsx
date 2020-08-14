import React, { useState, useContext, createContext, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import api from '../services/api';

interface User {
  id: string;
  display_name: string;
  followers: {
    total: number;
  };
  email: string;
  images: [
    {
      url: string;
    },
  ];
}

interface AuthContextData {
  signIn(): Promise<void>;
  signOut(): void;
  user: User;
}

interface AuthState {
  accessToken: string | null;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const location = useLocation();
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const accessToken = localStorage.getItem('@SpotifyWebDee:access_token');
    const user = localStorage.getItem('@SpotifyWebDee:user');

    if (accessToken && user) {
      api.defaults.headers.authorization = `Bearer ${accessToken}`;

      return {
        accessToken,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async () => {
    const urlParams = new URLSearchParams(location.hash.replace('#', '?'));
    const accessToken = urlParams.get('access_token');

    if (accessToken) {
      localStorage.setItem('@SpotifyWebDee:access_token', accessToken);
      api.defaults.headers.authorization = `Bearer ${accessToken}`;

      const user = await api.get('/me');

      setData({
        accessToken,
        user: user.data,
      });

      localStorage.setItem('@SpotifyWebDee:user', JSON.stringify(user.data));

      history.push('/');
    }
  }, [history, location.hash]);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SpotifyWebDee:access_token');
    localStorage.removeItem('@SpotifyWebDee:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
