// Inputkan num yang akan dibagi dan diurutkan
const num = prompt("Masukan angka")
//5956560159466056

// Ubah type data number menjadi string
const newNum = num.toString()

//Kembalikan nilai string menjadi array dan pisahkan menggunakan (0)
const arrNum = newNum.split(0)

//Kembalikan nilai arrNum berupa array tiap item mengunakan function map
//Urutkan secara ascending setiap item array menggunakan function sort 
//Gabungkan setiap item array yang sudah urut menggunakan functiom join
const sortNum = arrNum.map((item)=>{ return item.split("").sort().join("")})

//Kembalikan nilai array menjadi string
const result = sortNum.join("")

//Cetak hasil
alert(result)
