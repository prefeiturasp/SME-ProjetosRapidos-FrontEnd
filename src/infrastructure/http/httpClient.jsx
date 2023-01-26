const API_URL = process.env.REACT_APP_API_URL;

const URL_BASE = API_URL;

export default {
  get(resource) {
    let url = `${URL_BASE}${resource}`;
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
    let url = `${URL_BASE}${resource}`;
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
    let url = `${URL_BASE}${resource}`;
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
    let url = `${URL_BASE}${resource}`;
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
