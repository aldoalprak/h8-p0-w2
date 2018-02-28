//1. Melakukan Looping Menggunakan While

var i=2
console.log("LOOPING PERTAMA");
while(i<=20) {
  console.log(i + " - " + "I love coding");
  i=i+2;
}

var j=20;
console.log("LOOPING KEDUA");
while(j>=1) {
  console.log(j+ " - " +"I will become fullstack developer");
  j=j-2;
}

//2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA")
for(var i=0;i<=20;i++) {
  console.log(i + " - "+"I love coding");
}
console.log("LOOPING KEDUA")
for(var i=20;i>=1;i-- ) {
  console.log(i+" - "+"I will become fullstack developer");
}

//3. Angka Ganjil dan Genap


console.log("Ganjil-Genap")

for(var i=1;i<=100;i++) {
  if(i%2 === 0) {
    console.log("GENAP");
  }else {
    console.log("GANJIL");
  }
}


console.log("Pertambahan Counter 2, kelipatan 3")

for(var i=1;i<=100;i+=2) {
  if(i%3 === 0) {
    console.log(i + " kelipatan 3");
  }else {
    console.log("");
  }
}

console.log("Pertambahan Counter 5, kelipatan 6")

for(var i=1;i<=100;i+=5) {
  if(i%6===0) {
    console.log(i+" kelipatan 6");
  }else {
    console.log("");
  }
}

console.log("Pertambahan Counter 9, kelipatan 10")

for(var i=1;i<=100;i+=9) {
  if(i%10 ===0) {
    console.log(i + " kelipatan 10")
  }else {
    console.log("");
  }
}
