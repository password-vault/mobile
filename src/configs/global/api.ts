import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'https://dd56-186-250-73-107.sa.ngrok.io',
});
