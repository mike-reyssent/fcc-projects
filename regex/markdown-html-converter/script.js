//dom
const inputHTML = document.getElementById("markdown-input");
const rawHTML = document.getElementById("html-output");
const previewHTML = document.getElementById("preview");

const convert = (str) => {
  let result = str;

  // 1. BLOCK ELEMENTS (Heading & Quote)
  // Pakai 'if-else' karena satu baris cuma bisa jadi satu jenis blok
  if (/^(#{1,3})\s+(.*)/.test(result)) {
    result = result.replace(/^(#{1,3})\s+(.*)/, (m, g1, g2) => `<h${g1.length}>${g2}</h${g1.length}>`);
  } else if (/^>\s+(.*)/.test(result)) {
    result = result.replace(/^>\s+(.*)/, '<blockquote>$1</blockquote>');
  }

  // 2. INLINE ELEMENTS (Bold, Italic, Link, Image)
  // PENTING: Gunakan .replace() beruntun agar bisa 'Nested'
  
  // Image dulu baru Link (biar tanda ! gak ganggu)
  result = result.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
  result = result.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  // Bold (** atau __)
  result = result.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');
  
  // Italic (* atau _)
  result = result.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

  return result;
};

// TRIGGER UTAMA (The Engine)
const convertMarkdown = () => {
  const input = inputHTML.value;
  
  // Algoritma: Split (Potong) -> Map (Proses) -> Join (Gabung)
  const finalResult = input.split('\n')
    .map(line => convert(line))
    .join(''); 

  rawHTML.textContent = finalResult;
  previewHTML.innerHTML = finalResult;
  
  return finalResult;
};

inputHTML.addEventListener("input", convertMarkdown);