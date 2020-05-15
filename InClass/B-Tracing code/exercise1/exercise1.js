function greetPeople(people) {
  //Redundancy, logic errors
  // var greeting = "He";
  // greeting = greeting + "llo";
  // greeting = greeting + " ";

  //Declaring variable properly

  var greeting = "Hello ";

  people.forEach(function (person) {
    //Logic error below
    //greeting = greeting + person;
    return console.log(greeting + person);
  });
  //Redundant return outside forEach()
  // return greeting;
}

/*
  Let's trace this piece of code - what is the value of result with this input
  
  */
var mentors = ["Irina", "Ashleigh", "Etza"];
var result = greetPeople(mentors);

// console.log(mentors);
console.log(result);
