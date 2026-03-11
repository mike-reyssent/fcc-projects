//dom
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i")
const globalFlag = document.getElementById("g");

//function

//getFlags function
const getFlags = () => {
  let result = "";
  if(caseInsensitiveFlag.checked){
    result += caseInsensitiveFlag.id;
  }; 
  if(globalFlag.checked){
    result += globalFlag.id;
  }; 
  if(!globalFlag.checked){
    result = result;
  }; 
  if(!caseInsensitiveFlag.checked){
    result = result;
  }; 
  
  return result
};

//next function
//highlight function

const highlight = () => {
  let regex = new RegExp(`${regexPattern.value}`, getFlags());
  stringToTest.innerHTML = stringToTest.textContent.replace(regex, `<span class="highlight">$&</span>`)
};
testButton.addEventListener("click", highlight)

//result function
const showResult = () => {
  let regex = new RegExp(`${regexPattern.value}`, getFlags());
  let textResult = stringToTest.textContent.match(regex);
  result.innerText = textResult ? textResult.join(", ") : "no match"
};
testButton.addEventListener("click", showResult);
