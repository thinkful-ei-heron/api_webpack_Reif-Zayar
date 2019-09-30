
import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api.js';

import shoppingList from './shopping-list';

const main = function () {
  // testing outside api response
  // fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  //   .then(res => res.json())
  //   .then(data => console.log(data));

  // api.getItems()
  //   .then(res => console.log(res));

  // console.log(api.BASE_URL);

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
