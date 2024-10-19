// Lista de palavrões (adicione mais se necessário)
const badWords = ["buceta", "porra", "caralho", "foda", "fudeu", "foder", "fodendo", "boquete", "puta"];

// Função que substitui palavrões
function filterBadWords(text) {
  let regex = new RegExp(badWords.join("|"), "gi");
  return text.replace(regex, "***");
}

// Função que processa todo o texto do site
function walk(node) {
  let child, next;

  switch (node.nodeType) {
    case 1: // Element
    case 9: // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      node.nodeValue = filterBadWords(node.nodeValue);
      break;
  }
}

// Iniciar o processo quando a página carregar
window.addEventListener("load", () => {
  walk(document.body);
});
