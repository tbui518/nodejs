// object properties and methods

var obj = {
    // greet is prop name and Hello is value
    greet: 'Hello'
}

// access the properties on the object 
console.log(obj.greet);

// syntax bracket and a string, which is name of property
console.log(obj['greet']); 

//set var to string value
var prop = 'greet';
console.log(obj[prop]);

// functions and arrays
var arr = [];

// 1st array
arr.push(function(){
    console.log('Hello World 1');
});

// 2nd array
arr.push(function(){
    console.log('Hello World 2');
});

// 3rd array
arr.push(function(){
    console.log('Hello World 3');
});

// loop through array to pull out function
arr.forEach(function (item){
    item();
});

