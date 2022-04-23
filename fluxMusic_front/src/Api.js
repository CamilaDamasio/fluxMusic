import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_BACK_FLUXMUSIC_URL || process.env.REACT_APP_FLUXMUSIC_URL,
});
