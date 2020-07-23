import axios from 'axios';

const base64EncodingCredentials = btoa(
  `${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`,
);

const api = axios.create({
  baseURL: 'https://accounts.spotify.com/',
  headers: {
    Authorization: `Basic ${base64EncodingCredentials}`,
  },
});

export default api;
