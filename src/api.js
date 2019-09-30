import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/reif';

const getItems = function () {
  return apiFetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  let newItem = JSON.stringify({
    name
  });
  return apiFetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newItem
  });
};

const updateItem = function (id, updateData) {
  return apiFetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData)
  });
};

const deleteItem = function (id) {
  return apiFetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
}

const responseCheck = function (res) {
  let error;
  if (!res.ok) {
    error = `Status code ${res.status} not ok`;
    return Promise.reject(error);
  }
  return res
}

const apiFetch = function (...args) {
  return fetch(...args)
    .then(resp => responseCheck(resp))
    .catch(error => {
      store.errors.error = error;
    });
}

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};