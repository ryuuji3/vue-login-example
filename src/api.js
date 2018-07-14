const api = 'https://reqres.in/api';

export const login = async (username, password) => {
  const response = await fetch(`${api}/login?delay=1`, {
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

  if (response.status === 400) {
    throw Error(response.statusText);
  }

  return response.json();
};
