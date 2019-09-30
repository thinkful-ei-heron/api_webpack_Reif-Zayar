
import $ from 'jquery';

import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';

const main = function () {
  // testing outside api response
  // fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  //   .then(res => res.json())
  //   .then(data => console.log(data));

  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
