export const BASE_URL = `https://api.kino-explorer.nomoredomains.icu`;

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      credentials: 'include',  
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    .then((res) => res)
    .catch((err) => 'Ошибка: ' + err)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      credentials: 'include',   
      body: JSON.stringify({
        email, 
        password
      })
    })
    .then((res) => res.json())
    .catch((err) => 'Ошибка: ' + err)
};