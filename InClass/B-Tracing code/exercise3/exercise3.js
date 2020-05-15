const getRepos = function (repoName) {
  return fetch("https://api.github.com/users/" + repoName + "/repos")
    .then((data) => data.json())
    .then(function (response) {
      return response.map(function (rep) {
        var myElement = document.querySelector("#main");
        var paragraph = document.createElement("p");
        paragraph.innerText = rep.name;
        myElement.appendChild(paragraph);
        console.log(rep.name);
        return rep.name;
      });
    });
};

const migracodeRepos = getRepos("migracode-barcelona");
console.log("Loading...");

var myElement = document.querySelector("#main");
var paragraph = document.createElement("p");
paragraph.innerText = `${migracodeRepos}`;
// console.log(`${migracodeRepos}`);
myElement.appendChild(paragraph);

//Task1. Fix the code
//Task2. Create a <p> for each repository

//If we declare expressions for DOM inside "then", we can directly get response elements on screen
//Note: Next, I will try to destructure data.json and refer directly to it later on to get the names to DOM.
