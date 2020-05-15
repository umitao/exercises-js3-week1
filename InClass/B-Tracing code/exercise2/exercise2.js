function removeVowels(word) {
  var characters = word.split("");
  var vowels = ["a", "e", "i", "o", "u"];
  var result = [];

  characters.forEach(function (character) {
    // Redundancy in if conditions, fixed with vowels array and includes method.
    // if (
    //   character === "a" ||
    //   character === "o" ||
    //   character === "i" ||
    //   character === "e" ||
    //   character === "u"
    // )
    if (!vowels.includes(character)) {
      result.push(character);
    } else {
      result.push("_");
    }
  });

  return result.join("");
}

function removeVowelsForWords(words) {
  var result = words.map(function (word) {
    return removeVowels(word);
  });

  return result;
}

/*
  Task 1
  Let's trace this piece of code - what is the value of result with this input
  */
var result = removeVowels("samuel");
console.log(result); //Returns _a_ue_ Only removes consonants. Not vowels

/*
	Task 2
	Trace what happens if we call the function removeVowelsForWords with this input: ["Irina", "Etza", "Daniel"]
    expected output?:
*/
var wordArray = ["Irina", "Etza", "Daniel"];
var arrayWords = removeVowelsForWords(wordArray);
console.log(arrayWords);
