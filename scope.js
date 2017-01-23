
// function expression immediately invoked
(function () {

    var firstname = 'john';
    console.log(firstname);

}());

var firstname = "jane";
    console.log(firstname);

(function (lastname) {

    var firstname = 'jay';
    console.log(firstname);
    console.log(lastname);


}('Doe'));
