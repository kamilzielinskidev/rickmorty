import { getEnvVariable } from '../utils/getEnvVariable';

const apiUrl = getEnvVariable('VITE_API_URL');

export const get = <A>(url: string) => {
  return fetch(`${apiUrl}${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as A;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
