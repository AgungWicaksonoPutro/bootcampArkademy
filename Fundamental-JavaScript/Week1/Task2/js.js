// fase inisialisasi nama matapelajaran
let mapel = ["Bahasa Indonesia", "Bahasa Inggris", "Ipa", "Matematika"]

// inisialisasi variabel nilai
let nilai = [];

// meminta input nilai dari user
let sumArr = mapel.length;
for(let j = 0; j < sumArr ; j++){
    let newNilai = parseInt(prompt("Masukan Nilai Berupa Angka Skala 1 - 100 " + mapel[j] + " ?"))
    if (parseInt(newNilai)){
        nilai.push(newNilai);
        console.log("Nilai Mapel " + mapel[j] + " " + nilai[j])
    } else {
        j = nilai.length - 1;
        alert("Maaf Anda Memasukan Data Yang Salah!" )
    }
    
} 

//proses penjumlahan nilai
let sum = 0;
for(let i = 0; i < nilai.length ; i++){
    sum += nilai[i];
}

// menghitung rata-rata
let average = sum / nilai.length;

// pengkondisian mengubah nilai rata-rata menjadi grade 
let grade;
if (average <= 59) {
    grade = "Grade E"
} else if (average <= 69) {
    grade = "Grade D"
} else if (average <= 79) {
    grade = "Grade C"
} else if (average <= 89) {
    grade = "Grade B"
} else if (average <= 100) {
    grade = "Grade A"
} else {
    grade = "Maaf Ada input yang salah"
}

// Mencetak kesimpulan penghitungan dan grade yang didapat
console.log("Total Nilai " + sum + " dengan Rata-Rata " + average + '\n' + grade)

