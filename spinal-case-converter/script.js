const regexOne = /([a-z])([A-Z])/g;
const regexTwo = /[ _]+/g;

const spinalCase = (str) => {
 let result = str.replace(regexOne, "$1 $2").toLowerCase().replace(regexTwo, "-")
 return result
};

console.log(spinalCase("this is sparta"));


console.log("GamesCom_science".replace(regexOne, "$1 $2"));



