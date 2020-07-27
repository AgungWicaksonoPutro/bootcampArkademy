/*
1.  Mulai
2.  Inputkan kalimat
3.  Konversikan  kalimat menjadi Array
4.  kembalikan nilai dengan medeklarasikan i = kalimat.length
5.  pastikan jika nilai i lebih dari sama dengan 0
6.  lakukan reverse iteration dengan mengurangi panjang kalimat.length dengan - 1
7.  Tampilkan kalimat[i]
8.  Selesei
*/

let sentence = prompt("Masukan kalimat")

const newSentence = sentence.split(" ")

let reverse = '';
for (let i = (newSentence.length - 1) ; i >= 0 ; i--){
    reverse += newSentence[i] + ' '
}

alert(reverse)