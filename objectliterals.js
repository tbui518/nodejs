var person = {
    firstname: 'Jay',
    lastname: 'Bui',
    greet: function(){
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};

person.greet();
console.log(person.firstname);
console.log(person['firstname']);