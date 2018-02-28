var nama = "Nina";
var peran = "Ksatria";

var peranLow = peran.toLowerCase();
if (nama === "") {
  console.log("Nama harus diisi!")
} else if(peran === "") {
  console.log("Halo " + nama +", Pilih peranmu untuk memulai game!")
}else if(peranLow === "ksatria") {
  console.log("Selamat datang di Dunia Proxytia, "+ nama);
  console.log("Halo "+ peran +" "+ nama +", kamu dapat menyerang dengan senjatamu!");
}else if(peranLow === "tabib") {
  console.log("Selamat datang di Dunia Proxytia, "+ nama);
  console.log("Halo "+ peran +" "+ nama +", kamu akan membantu temanmu yang terluka.");
}else if(peranLow === "penyihir") {
  console.log("Selamat datang di Dunia Proxytia, "+ nama);
  console.log("Halo "+ peran +" "+ nama +", ciptakan keajaiban yang membantu kemenanganmu!");
}else {
  console.log("Maaf karakter yang kamu pilih tidak ada. Mohon untuk memilih antara Ksatria,Tabib, atau Penyihir. Happy Gaming!")
}