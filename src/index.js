
import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api.js';

import shoppingList from './shopping-list';
import store from './store';

const main = function () {
  // testing outside api response
  // fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  //   .then(res => res.json())
  //   .then(data => console.log(data));

  // api.getItems()
  //   .then(res => res.json())
  //   .then(res => console.log(res));

  // console.log(api.BASE_URL);

  // api.createItem('pears')
  //   .then(res => res.json())
  //   .then((newItem) => {
  //     return api.getItems();
  //   })
  //   .then(res => res.json())
  //   .then((items) => {
  //     console.log(items);
  //   });

  // api.getItems()
  // .then(res => res.json())
  // .then((items) => {
  //   const item = items[0];
  //   return api.updateItem(item.id, { name: 'foobar' });
  // })
  // .then(res => res.json())
  // .then(() => console.log('updated!'));

  api.getItems()
  .then(res => res.json())
  .then(items => {
    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name: ' + item.name);
  })
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

  shoppingList.bindEventListeners();
  shoppingList.render();


};

$(main);
