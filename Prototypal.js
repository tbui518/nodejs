var person = {
    firstname:"Jay",
    lastname:"Bui",
    greet: function() {
        console.log("Hello," + this.firstname+ ' ' + this.lastname );
    }
}

person.greet();