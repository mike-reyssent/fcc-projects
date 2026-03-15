//dom
const inputHTML = document.getElementById("markdown-input");
const rawHTML = document.getElementById("html-output");
const previewHTML = document.getElementById("preview");

//first result function
const convertMarkdown = (str) => {
  const headingRegex = /^(#{1,3})\s*(.*)/;
  const heading = str.match(headingRegex);
  const boldRegex = /([*_]{2})\s*(.*)([*_]{2})\s*/;
  const bold = str.match(boldRegex);
  const italicRegex = /([*_]{1})\s*(.*)([*_]{1})\s*/;
  const italic = str.match(italicRegex);
  const imgRegex = /^([![(.*)]])([((.*))])$/;
  const img = str.match(imgRegex);
  if(heading){
    const level = heading[1].length;
    const content = heading[2];
    return `<h${level}>${content}</h${level}>`;
  };
  if(bold){
    const content = bold[2];
    return `<strong>${content}</strong>`
  };
  if(italic){
    const content = italic[2];
    return `<em>${content}</em>`
  };
  if(img){
    return `<img alt="${img}">`
  };



};
//raw output function
const showResult = () => {
  let inputValue = inputHTML.value;
  let convertedValue = convertMarkdown(inputValue);
  rawHTML.textContent = convertedValue;
  previewHTML.innerHTML = convertedValue;
};





//so basically theres two results boxes, one will generate the raw HTML and the second will generate the result of those, build the first result before jump into the second


inputHTML.addEventListener("input", showResult);
