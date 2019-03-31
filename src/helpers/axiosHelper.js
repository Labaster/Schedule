import axios from 'axios';

export default async (params) => {
  const { data } = await axios(params);
  if (data.error === 'not logged') {
    window.location = '/connect/facebook';
  }
  return data;
}