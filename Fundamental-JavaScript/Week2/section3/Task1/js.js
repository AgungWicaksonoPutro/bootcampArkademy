/*
1. Mulai
2. Inputkan kata yang akan diuji
3. Hitung panjang kata dan kembalikan panjang angka ke variabel baru
4. Lakukan  reverse iterasi dan kembalikan nilai (return value) iterasi
5. Bandingkan kata yang diinputkan dengan return value reverse iterasi
6. Jika huruf pertama  pada kata sama seperti dengan huruf terakhir return value iterasi
7. Tampilkan "Kata Merupakan Palindrom"
8. Jika tidak "Kata Bukan Palindrom"
9. Selesei 
 */

const word = prompt('Masukan Kata Yang Akan Divalidasi Palindrome')

let newWord = '';
for(let i = (word.length -1) ; i >= 0 ; i--){
    console.log(word[i])
    newWord += word[i];
}

if (newWord.toLowerCase() == word.toLowerCase()) {
    confirm("Ini adalah palindrome")
} else {
    confirm("Bukan Palindrome")
}