const URL_BASE = process.env.REACT_APP_API_URL;

const API_URL = URL_BASE + '/api';

export default {
  get(resource) {
    let url = `${API_URL}${resource}`;
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(async function (response) {
      let resData = await response.json();
      if (!response.ok) {
        return Promise.reject(resData);
      }
      return resData;
    });
  },

  del(resource) {
    let url = `${API_URL}${resource}`;
    return fetch(url, {
      method: "DELETE",
    }).then(async function (response) {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response;
    });
  },

  post(resource, body) {
    let url = `${API_URL}${resource}`;
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(async function (response) {
      let resData = await response.json();
      if (!response.ok) {
        return Promise.reject(resData);
      }
      return resData;
    });
  },

  put(resource, body) {
    let url = `${API_URL}${resource}`;
    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(async function (response) {
      let resData = await response.json();
      if (!response.ok) {
        return Promise.reject(resData);
      }
      return resData;
    });
  },
};
