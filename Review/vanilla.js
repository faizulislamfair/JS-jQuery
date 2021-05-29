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

var javascript = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printLibraries: function() {
        this.libraries.forEach(function(a) {
             console.log(`${this.name} loves ${a}`);
        });
    },
};

javascript.printLibraries();
