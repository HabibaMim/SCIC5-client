import { authClient } from './auth-client';

export const authFetch = async (url, options = {}) => {
  const { data } = await authClient.token();

  if (!data?.token) {
    throw new Error('Not authenticated');
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${data.token}`,
    },
  });

  return res;
};