//Exercise 11 Balik KAta


function balikKata(kata) {
  // you can only write your code here!
  var kataReverse ="";
  var jumlahKata=kata.length;
  for(var i=kata.length ;i>=0;i--) {
    kataReverse = kataReverse+kata[i];
  }
  return(kataReverse);
}

// TEST CASES

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS