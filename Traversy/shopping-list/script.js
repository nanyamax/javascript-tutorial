// DOM SELECTORS - SINGLE ELEMENT
// document.getElementById()

// console.log(document.getElementById('app-title'));
// // console.log(document.getElementById('app-title').id); this syntax doesn't work like this for all property.
// console.log(document.getElementById('app-title').getAttribute('id'));

// Set Attributes
document.getElementById('app-title').title = 'shopping list';
document.getElementById('app-title').setAttribute('class', 'title');
// you can use a variable
const title = document.getElementById('app-title');
//  Get/change content
console.log(title.textContent);
title.textContent = 'Hello world';
title.innerText = 'Hello again';
title.innerHTML = '<stong>Shopping List</strong>';

// change styles( changing css styles in js)
title.style.color = 'grey';
title.style.backgroundColor = 'white';
title.style.padding = '2px';

// query selector
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('input[type=text'));
console.log(document.querySelector('.form-input-filter'));
console.log(document.querySelector('li:nth-child(3)'));
const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Ice cream';
secondItem.style.backgroundColor = '#ccc';

// use these methods on other elements other than the documents
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
console.log(firstItem);
firstItem.style.color = 'magenta';
firstItem.style.fontSize = '20px';

// DOM SELECTORS - MULTIPLE ELEMENTS
// querySelectorAll
const listItems = document.querySelectorAll('.items');
console.log(listItems[1].innerText);
// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 0) {
//     item.remove();
//   }

//   if (index === 3) {
//     item.innerHTML = `Choco  <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   }
// });
const listItem2 = document.getElementsByClassName('items');
console.log(listItem2[2].innerText);
const listItemsArray = Array.from(listItem2);
listItemsArray.forEach((item) => {
  console.log(item.innerText);
});
// getElementByTagName
const listItem3 = document.getElementsByTagName('li');
console.log(listItem3);
