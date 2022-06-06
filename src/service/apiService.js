import { BASE_URL } from '../constants/url';

export const apiService = async (url, method, body, params = {}) =>
  await fetch(BASE_URL + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body && null,
  }).then(r => r.json());
