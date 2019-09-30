import $ from 'jquery';
import store from './store';

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/zayar';

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
};

const responseCheck = function (res) {
  if (!res.ok) {
<<<<<<< HEAD
    error = `Status code ${res.status} not ok`;
    store.errors.error = error;
    $('.js-shopping-list').append(store.errors.error)
    throw Error(error);
=======
    store.errors.error = res.status;
    document.getElementById('error-container').innerHTML = (`Error: ${res.status}`);
    return Promise.reject(`Error code: ${res.status}`);
>>>>>>> f8fef18a09bd0226aebead8b13c8cda8d15057be
  }
  document.getElementById('error-container').innerHTML = '';
  return res;
};

const apiFetch = function (...args) {
  return fetch(...args)
    .then(resp => {
      responseCheck(resp);
      return resp;
    })
<<<<<<< HEAD
    .catch(error => {
      console.log(error);
=======
    .catch(resp => {
      document.getElementById('error-container').innerHTML = '';
      store.errors.error = resp;
      document.getElementById('error-container').innerHTML = (`Error: ${resp}`);
>>>>>>> f8fef18a09bd0226aebead8b13c8cda8d15057be
    });


  // .then(resp => responseCheck(resp));
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};