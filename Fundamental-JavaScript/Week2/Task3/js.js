
const searchDataArray = (nilaiAwal, nilaiAkhir, arr) => {
    if(arr.length >= 5 && nilaiAwal < nilaiAkhir) {
        console.log("Terimakasih data yang diinputkan sudah benar")
    } else {
        console.log(`Syarat input parameter:
        nilai awal lebih kecil dari nilai akhir
        array panjangnya lebih dari 5
        nilai awal yang anda masukan ${nilaiAwal} sedangkan nilai akhir ${nilaiAkhir}
        dan jumlah array yang anda inputkan ${arr.length}`)
    }
    const selectingData = arr.map((item) => {
            return value = item++;
        }).filter((a)=>{
            return (a > nilaiAwal && a < nilaiAkhir)
    })

    if(selectingData.length != 0){
        const sortData = () => {
            return selectingData.sort()
        }
        console.log(sortData())
    } else {
        console.log("Maaf Data Kosong")
    }
}

searchDataArray(1,15,[12,1,11,14,23,19,30])
  
  

