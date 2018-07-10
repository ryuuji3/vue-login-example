const api = 'https://reqres.in/api';

export const login = async (username, password) => {
  const response = await fetch(`${api}/login?delay=2`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  return response.json();
};
