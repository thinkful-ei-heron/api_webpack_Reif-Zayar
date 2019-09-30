import item from './item';

const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  // old logic
  // try {
  //   item.validateName(name);
  //   this.items.push(item.create(name));
  // } catch (e) {
  //   console.log(e.message);
  // }
  this.items.push(item);
};

// const findAndToggleChecked = function (id) {
//   const currentItem = this.findById(id);
//   currentItem.checked = !currentItem.checked;
// };

const findAndUpdate = function (id, newData) {
  let updatedItem = this.findById(id);
  Object.assign(updatedItem, newData);
}

// const findAndUpdateName = function (id, name) {
//   try {
//     item.validateName(name);
//     const currentItem = this.findById(id);
//     currentItem.name = name;
//   } catch (e) {
//     console.log('Cannot update name: ' + e.message);
//   }
// };

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckeditems,
  findById,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter
};