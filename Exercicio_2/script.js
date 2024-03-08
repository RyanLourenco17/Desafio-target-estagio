function sequenciaFibonacci(numero) {
  let fibA = 0;
  let fibB = 1;

  while (fibB <= numero) {
    if (fibB === numero) {
      return true;
    }

    let temp = fibA + fibB;
    fibA = fibB;
    fibB = temp;
  }

  return false;
}
  
const numeroInformado = 55;

// Verifique se o número pertence à sequência de Fibonacci
if (sequenciaFibonacci(numeroInformado)) {
  console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
  

