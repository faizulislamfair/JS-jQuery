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

let lastItem = document.querySelector('.item:nth-child(2)');

//console.log(lastItems);

//lastItems.style.color = 'orange';

// for(let element of lastItem){
//     element.style.color = 'orange';
// }

lastItem.style.color = 'blue';
