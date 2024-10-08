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

// let soldProductInputUser = prompt("Masukan Jumlah Barang Yang Akan Di Beli");
// let currentProduct = 5;
// let soldProductConvert = parseInt(soldProductInputUser);
// let soldProduct = soldProductConvert;
// if (soldProduct < 0 || isNaN(soldProduct)) {
//   alert("Jumlah product saat ini adalah " + currentProduct);
// } else {
//   updateStock(soldProduct, currentProduct);
// }

// let stockNew;

// function updateStock(soldProduct, currentProduct) {
//   if (soldProduct[0] > currentProduct) {
//     alert("Yahh Product Sudah Habis !");
//     return;
//   }
//   stockNew = currentProduct - soldProduct;
//   alert("Jumlah product saat ini adalah " + stockNew);
//   return stockNew;
// }

// Object Dan Gabungan Study Kasus

let data = {
  menu: ["pizza", "hamburger", "pasta", "nasi goreng", "hotdog", "martabak"],
  harga: [15000, 20000, 18000, 10000, 15000, 10000],
  stock: [12, 13, 12, 24, 53, 12],
};

function userInputValid(callback) {
  let inputUserMenu = prompt("Masukan Menu Yang Ingin Di Beli");
  if (inputUserMenu === "" || inputUserMenu === null) {
    alert("Menu Tidak Boleh Kosong");
    location.reload();
    return;
  }

  let inputUserHarga = parseInt(prompt("Masukan Jumlah Uang"));
  if (inputUserHarga <= 0 || isNaN(inputUserHarga)) {
    alert("Harga Tidak Boleh Rp.0 Atau Karakter ");
    location.reload();
    return;
  }

  let inputUserStock = parseInt(prompt("Masukan Berapa Banyak Yang Anda Beli"));
  if (isNaN(inputUserStock) || inputUserStock <= 0) {
    alert("Jumlah yang ingin dibeli Harus Valid dan Lebih Besar Dari Nol");
    location.reload();
    return;
  }

  callback(inputUserMenu, inputUserHarga, inputUserStock);
}

userInputValid(validasiData);

function validasiData(inputUserMenu, inputUserHarga, inputUserStock) {
  let validMenu = false;
  let validHarga;
  let validStock;

  for (let i = 0; i < data.menu.length; i++) {
    let menuItem = data.menu[i];
    let hargaItem = data.harga[i];
    let stockItem = data.stock[i];

    if (inputUserMenu === menuItem) {
      validMenu = true;
      validHarga = hargaItem;
      validStock = stockItem;
      let kembalian;

      if (validStock < inputUserStock) {
        alert("Stok Tidak Cukup");
        location.reload();
        return;
      }

      let totalBiaya = validHarga * inputUserStock;
      kembalian = inputUserHarga - totalBiaya;

      if (kembalian < 0) {
        alert("Uang Kamu Tidak mencukupi");
        location.reload();
        return;
      } else {
        alert(`Pembelian Berhasil! Menu: ${menuItem}, Jumlah: ${inputUserStock}, Total Biaya: Rp.${totalBiaya}, Kembalian: Rp.${kembalian}`);
        return;
      }
    }
  }

  if (!validMenu) {
    alert("Menu Tidak Tersedia");
    location.reload();
  }
}
