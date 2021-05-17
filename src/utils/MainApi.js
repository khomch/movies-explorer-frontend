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

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      credentials: 'include',   
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(handleOriginalResponse);
  }

  addMovie(data) {
    return fetch(`${this._url}/movies/`, {
      method: "POST",
      credentials: 'include',   
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        year: data.movie.year,
        country: data.movie.country,
        director: data.movie.director,
        duration: data.duration,
        description: data.movie.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailer: data.movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.movie.nameEN,
      })
    }).then(handleOriginalResponse);
  }

  deleteMovies(id, token) {
    return fetch(`${this._url}/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(handleOriginalResponse);
  }

  changeLikeMoviesStatus(id, isLiked, token) {
    if (isLiked) {
      return fetch(`${this._url}/movies/${id}/likes/`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(handleOriginalResponse);
    } else {
      return fetch(`${this._url}/movies/${id}/likes/`, {
        method: "DELETE",
        credentials: 'include',   
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`,
        },
      }).then(handleOriginalResponse);
    }
  }


  getProfileInfo() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: 'include',   
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
    }).then(handleOriginalResponse);
  }

  setProfileInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: 'include',   
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
    .then((res) => res)
    .catch((err) => 'Ошибка: ' + err);
  }
}

const api = new Api({
  url: `https://api.kino-explorer.nomoredomains.icu`,
  token: localStorage.getItem('token'),
})

export default api;