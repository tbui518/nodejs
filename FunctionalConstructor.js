function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.greet = function(){
    console.log('Hello,' + this.firstname + '' + this.lastname);
};

var john = new Person('john', 'Doe');
console.log(john.firstname);

var jane = new Person('jane', 'Doe');
console.log(jane.firstname);

var test = new Person ('jay', 'bui');

console.log(test['firstname']);

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(jane.__proto__ === john.__proto__);