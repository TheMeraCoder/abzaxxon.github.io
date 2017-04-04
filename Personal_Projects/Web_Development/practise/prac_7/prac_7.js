/*
 
 */
//Making an object
function person (name, age) {
    this.name = name;
    this.age = age;
}
var John = new person("John", 25);
var James = new person("James", 21);

var John = {
  name: "John",
  age: 25
};

var James = {
  name: "James",
  age: 21
};

//Making and array
var courses = ["HTML", "CSS", "JS"]; 

document.write(John.age);

document.write(John.age);
//Outputs 25

//setting dates with date object
function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);