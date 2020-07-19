// fase inisialisasi nama matapelajaran
let mapel = ["Bahasa Indonesia", "Bahasa Inggris", "Ipa", "Matematika"]

// inisialisasi variabel nilai
let nilai = [];

// meminta input nilai dari user
let sumArr = mapel.length;
for(let j = 0; j < sumArr ; j++){
    let newNilai = prompt("Masukan Nilai Berupa Angka Skala 1 - 100 " + mapel[j] + " ?")
    nilai.push(newNilai);
    console.log("Nilai Mapel " + mapel[j] + " " + nilai[j])
}

//proses penjumlahan nilai
let sum = 0;
for(let i = 0; i < nilai.length ; i++){
    sum += parseInt(nilai[i]);
}

// menghitung rata-rata
let average = sum / nilai.length;

// pengkondisian mengubah nilai rata-rata menjadi grade 
let grade;
if (average <= 59) {
    grade = "E"
} else if (average <= 69) {
    grade = "D"
} else if (average <= 79) {
    grade = "C"
} else if (average <= 89) {
    grade = "B"
} else if (average <= 100) {
    grade = "A"
} else {
    console.log("Grade Max A")
}

// Mencetak kesimpulan penghitungan dan grade yang didapat
console.log("Total Nilai " + sum + " dengan Rata-Rata " + average + " Grade " + grade)

