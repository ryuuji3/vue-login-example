const api = 'https://reqres.in/api';

export const login = async (username, password) => {
  const response = await fetch(`${api}/login`, {
    method: 'POST',
    body: {
      username,
      password,
    },
  });
  return response.json();
};
