// GET ELEMENT BY ID


// let headerElement = document.getElementById('header');

//console.log(headerElement.textContent);
//console.log(headerElement.innerText);
//console.log(headerElement.innerHTML);

//headerElement.style.fontSize = '50px';


// GET ELEMENT BY Class


//console.log(document.getElementsByClassName('item'));

// let itemUL = document.getElementById('items');
// let items = itemUL.getElementsByClassName('item');
// for(let i=0; i<items.length; i++) {
//     items[i].style.color = 'red';
// }


// GET ELEMENT BY tagname


// let itemed = document.getElementsByTagName('h2');

// console.log(itemed)


// Query Selector


// let header = document.querySelector('.header');

// console.log(header);

// let newTask = document.querySelector('#new-task');

// console.log(newTask);

//let lastItem = document.querySelector('.item:nth-child(2)');

// let lastItem = document.querySelector('#items').querySelector('.item:nth-child(2)');

//console.log(lastItems);

//lastItems.style.color = 'orange';

// for(let element of lastItem){
//     element.style.color = 'orange';
// }

// lastItem.style.color = 'cyan';

// const grandparent = document.querySelector('.todo-list');
//const parent = grandparent.children;
// const children = grandparent.querySelectorAll('.item');

// console.log(children);

// const childrenOne = document.querySelector('.item');
// const parent = children.parentElement;
// console.log(parent);

// const grandparent = children.closest('.todo-list');

// console.log(grandparent);

const childrenTwo = document.querySelector('.item').nextElementSibling;
const childrenOne = childrenTwo.previousElementSibling;
childrenOne.style.color = 'cyan';

console.log(childrenTwo);