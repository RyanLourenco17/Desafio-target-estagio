function  perguntaA() {
    // A lógica é adicionar 2 ao número anterior. Portanto, o próximo elemento é 9.
    let questaoA = [1, 3, 5, 7]
    let proximoNumero = questaoA[questaoA.length - 1] + 2;
    console.log(`O próximo elemento da questao A é: ${proximoNumero}`)
}

function perguntaB(){
    // A lógica é multiplicar o número anterior por 2. Portanto, o próximo elemento é 128.
    let questaoB = [2, 4, 8, 16, 32, 64]
    let proximoNumero = questaoB[questaoB.length - 1] * 2;
    console.log(`O próximo elemento da questao B é: ${proximoNumero}`);
}

function perguntaC(){
    // A lógica é elevar o número ao quadrado. Portanto, o próximo elemento é 49.
    let questaoC = [0, 1, 4, 9, 16, 25, 36]
    let proximoNumero = questaoC[6] - questaoC[5] + 2 + questaoC[6]
    console.log(`O próximo elemento da questao C é: ${proximoNumero}`);
}

function perguntaD(){
    // A lógica é que os números sao os quadrados perfeitos de 2, 4, 6, 8, etc. Portanto, o próximo elemento é 100.
    let questaoD = [4, 16, 36, 64]
    let proximoNumero = Math.pow(Math.sqrt(questaoD[questaoD.length - 1]) + 2, 2);
    console.log(`O próximo elemento da questao D é: ${proximoNumero}`);
}

function perguntaE(){
    // A lógica é a sequência de Fibonacci. Portanto, o próximo elemento é 13.
    let questaoE = [1, 1, 2, 3, 5, 8]
    let proximoNumero = questaoE[4] + questaoE[5];
    console.log(`O próximo elemento da questao E é: ${proximoNumero}`);
}


function perguntaF(){
   // A lógica é para números que começam com a letra 'd'
   const numeroPorExtenso = require('numero-por-extenso');
   let questaoF = [2, 10, 12, 16, 17, 18, 19];

   // Encontra o próximo número que começa com 'd'
   let proximoNumero = questaoF[questaoF.length - 1] + 1;
   while (!numeroPorExtenso.porExtenso(proximoNumero).startsWith('d')) {
       proximoNumero++;
   }

   console.log(`O próximo elemento da questao F é: ${proximoNumero}`);

}


perguntaA()
perguntaB()
perguntaC()
perguntaD()
perguntaE()
perguntaF()


