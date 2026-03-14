** start of script.js **

const myReplace = (str1, str2, str3) => {
  const regex = /^[A-Z]/g;
  if(regex.test(str2)){
    let newString = str3[0].toUpperCase() + str3.slice(1);
    return str1.replace(str2, newString)
  }; 
  return str1.replace(str2, str3.toLowerCase())
};

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))


** end of script.js **

