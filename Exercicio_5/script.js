function inverterString(originalString) {
  let invertedString = '';

  for (let i = originalString.length - 1; i >= 0; i--) {
    invertedString += originalString[i];
  }

  return invertedString;
}
  
const minhaString = 'Olá, mundo!';
const stringInvertida = inverterString(minhaString);

console.log(`String invertida: ${stringInvertida}`);

