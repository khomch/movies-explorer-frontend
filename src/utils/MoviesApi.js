const handleOriginalResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
}

export class Api {
  constructor(config) {
    this._url = config.url;
  }
  getFilms() {
    return fetch(`${this._url}/`, {
      method: "GET",
    }).then(handleOriginalResponse);
  }
}

const api = new Api({
  url: `https://api.nomoreparties.co/beatfilm-movies`
})

export default api;
