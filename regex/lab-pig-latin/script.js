** start of script.js **

const consonant = /[^aiueo]+/;


//beginning of the function
const translatePigLatin = (str) => {
  let result;
  //this will check if the string starts with consonant
  let store = str.split("");
  console.log(store)
  let checker = consonant.test(store[0]);
  console.log(checker)
  //this is what its gonna do if true
     if (checker){
  //take the consonant / consonant cluster
  result = str.match(consonant).join("")
  
  console.log(result)
  store.splice(0, result.length);
  console.log(store)
  let finalResult = store.join("") + result + "ay";
  return finalResult
      } 
      else {
        let finalResult = str + "way";
        return finalResult;
      }

  };
console.log(translatePigLatin("california"))

//consonant finishes in 70 min, vowel finishes in 2 min


** end of script.js **

