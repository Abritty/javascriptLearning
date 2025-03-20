// A function defenition can have only one Rest parameter
// Rest parameter is used to represent an indefinite number of arguments as an array.
// Rest parameter should be the last parameter in the function definition.
// Rest parameter is used to collect all the remaining arguments into an array.

function collecThings(x, ...y) {
    console.log(x);
    console.log(y);
}

collecThings(1, 2, 3, 4, 5); // 1 [ 2, 3, 4, 5 ]
