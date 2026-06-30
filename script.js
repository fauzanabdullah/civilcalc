function hitungLuas(){

let panjang =
parseFloat(document.getElementById("panjang").value);

let lebar =
parseFloat(document.getElementById("lebar").value);

let luas = panjang * lebar;

document.getElementById("hasilLuas").innerHTML =
"Hasil Luas = " + luas + " m²";

}
