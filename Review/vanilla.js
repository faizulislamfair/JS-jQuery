// function number() {
//     return 10;
// }

//let number = () => 10;

//let number = () => console.log(10);

//number();

// function number(n) {
//     return n;
// }

//let number = (n) => 10;

//console.log(number(10));

// const searchInput = document.querySelector(".search");

// const display = document.querySelector(".result");

// const thanks = document.querySelector(".thanks");


/* Normal function that works perfectly */
// function show() {
//     display.innerHTML = this.value;
//     var self = this;
//     setTimeout(function () {
//         thanks.innerHTML = `You have typed: ${self.value}`;
//     }, 1000);
// }

// searchInput.addEventListener("keyup", () => {
//     display.innerHTML = this.value;
// });


// var javascript = {
//     name: 'JavaScript',
//     libraries: ['React', 'Angular', 'Vue'],
//     printLibraries: function() {
//         this.libraries.forEach((a) => console.log(`${this.name} penguin ${a}`));
//     },
// };

// javascript.printLibraries();

// new keyword in fat arrow function

var Person = (name) => {
    this.name = name;
};

var Faizul = new Person('Fair');
