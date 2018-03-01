//1. Menyusun Barisan Bintang

var rows1 = 5;

for(var i=1 ;i<=rows1;i++) {
  console.log("*");
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 =5;

var blank="";

for(var i=1;i<=rows2;i++) {
  for(var j=1;j<=rows2;j++) {
    blank+="*" + "";
  }
  
  console.log(blank);
  var blank=""
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 =5;

var blank="";

for(var i=1;i<=rows3;i++) {
  for(var j=1;j<=i;j++) {
    blank+="*" + "";
  }
  
  console.log(blank);
  var blank="" 
}

