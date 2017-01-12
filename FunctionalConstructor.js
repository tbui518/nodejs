function Person(firstname, lastname) {

    this.firstname = firstname;
    this.lastname = lastname;

}

person.prototype.greet = function(){
    console.log('Hello,' + this.firstname + '' + this.lastname);
};

var john = new Person('john', 'Doe');
console.log(john.firstname);

var john = new Person('jane', 'Doe');
console.log(jane.firstname);

console.log(john.__proto__);
console.log(jane.__proto__);