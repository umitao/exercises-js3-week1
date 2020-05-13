const getRepos = function(repoName) {
  return fetch('https://api.github.com/users/' + repoName + '/repos')  
    .then(data => data.json())
    .then(function(response) {
      return response.map(function(rep) {
        return rep.name;
      });
    });
};

const migracodeRepos = getRepos('migracode-barcelona');
const mcRepos = getRepos('your-repo');
console.log("Loading...");


foreach   .name
map

console.log....

/*
  Let's trace this piece of code - what is the value of result with this input
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/