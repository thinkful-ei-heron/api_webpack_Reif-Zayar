const BASE_URL = 'https://thinkful-list-api.herokuapp.com/reif';

const getItems = function () {
  fetch(BASE_URL);
  return Promise.resolve('Success');
};
export default {
  getItems
};