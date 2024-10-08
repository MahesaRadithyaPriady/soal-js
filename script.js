// let bulan = new Date().getMonth();

// switch (bulan) {
//   case 1:
//     console.log("Oktober");
//     break;
// }

// let quantity = prompt("Masukan Jumlah Item Yang Akan Kamu Beli");
// let quantityInt = parseInt(quantity);

// let hargaDefault = 1000;
// function calculateTotalPrice(jumlahItem, harga) {
//   let result = jumlahItem * harga;
//   return result;
// }

// let result = calculateTotalPrice(quantityInt, hargaDefault);
// console.log("Jumlah Yang Harus Di Bayar Adalah " + result);

let soldProductInputUser = prompt("Masukan Jumlah Barang Yang Akan Di Beli");
let soldProductConvert = parseInt(soldProductInputUser);
let soldProduct = soldProductConvert;
let currentProduct = 5;
let stockNew;
updateStock(soldProduct, currentProduct);
function updateStock(soldProduct, currentProduct) {
  if (soldProduct > currentProduct) {
    alert("Yahh Product Sudah Habis !");
    return;
  }
  stockNew = currentProduct - soldProduct;
  alert("Jumlah product saat ini adalah " + stockNew);
  return stockNew;
}
