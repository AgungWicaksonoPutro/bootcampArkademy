/*
Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya
1. slice()
Metode ini akan memotong string dengan dua parameter yaitu posisi index awal dan posisi index akhir.
2. substring()
Metode ini hampir mirip dengan metode slice() namun dalam metode ini tidak diperbolehkan parameter berupa angka negatif.
3. substr()
Metode ini menggunakan dua parameter, parameter pertama berupa posisi index awal dan parameter kedua adalah panjang string yang akan diambil. 
4. toUpperCase()
Metode diatas untuk mengubah string menjadi huruf kapital.
5. toLowerCase()
Metode ini untuk mengubah string menjadi huruf kecil.
6. split()
Metode ini akan memecah string menjadi aray dengan parameter split yaitu pemisah antara karakter. Jadi karakter yang terpisahkan akan menjadi array masing – masing.
7. match()
Fungsional Js yang di gunakan untuk mengambil string sesuai yang di maksud
8. search()
Fungsional Js yang dingunakan untuk mencari permulaan dari sebuah kata yang kita cari misal eperti ini.
9. map()
Fungsi map ini digunakan untuk mengolah setiap element di array/object dan kemudian menghasilkan array/object baru.
10. filter()
Method filter() adalah method yang digunakan untuk mempermudah kita ketika ingin menyaring sebuah data.
*/

let nama = "Agung Wicaksono Putro"
//1. slice()
let namaSlice = nama.slice(0,-16);
console.log(namaSlice);

//2. substring()
let namaSubString = nama.substring(6, 15);
console.log(namaSubString);

//3. substr()
let namaSubstr = nama.substr(-5, 5);
console.log(namaSubstr);

//4. toUpperCase()
let kapital = nama.toUpperCase();
console.log(kapital);

//5. toLowerCase()
let hurufKecil = nama.toLocaleLowerCase();
console.log(hurufKecil);

//6. split()
let str = nama.split(" ");
console.log(str);

//7. match()
let str1 = nama.match(/o/g);
console.log(str1);

//8. search()
let str2 = nama.search("Wicaksono");
console.log(str2);

//9. map()
const deretAngka1 = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]
let num3 = deretAngka1.map( b => b * -1);
console.log(num3);

//10. filter()
const deretAngka2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let num4 = deretAngka2.filter( a => a % 2 == 0);
console.log(num4);
