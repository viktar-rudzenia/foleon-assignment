import axios from 'axios';

import { ApiRoutesEnum } from './constants';

const axiosInstance = axios.create();

let token: string | null = null;

const fetchToken = async () => {
  const response = await axiosInstance.post(ApiRoutesEnum.AUTHORIZATION, {
    grant_type: 'client_credentials',
    client_id: 'eVOfzXYAzz',
    client_secret: 'f467185f0e8ed5c8125929c1d5fbedc15bd9f60b413f7d8629fad65b3ffa7ad5',
  });
  token = response.data.access_token;
};

axiosInstance.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const fetcher = async (url: string) => {
  if (!token) {
    await fetchToken();
  }
  const { data } = await axiosInstance.get(url);
  return data;
  // rest of the fetcher function
};
