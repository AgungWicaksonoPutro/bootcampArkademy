let n = prompt("Masukan angka yang akan membentuk pola segitiga: ");

let s = '';
for (let i = n; i >= 1; i--){
    for (let j = 1; j <= i; j++){
      s += j;
    }
      s += '\n'
  }

console.log(s);