
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
    const selectingData = arr.filter((a)=>{
            return (a > nilaiAwal && a < nilaiAkhir)
    })

    if(selectingData.length != 0){
        const sortData = () => {
            return selectingData.sort((a,b) => a -b)
        }
        console.log(sortData())
    } else {
        console.log("Maaf Data Kosong")
    }
}

searchDataArray(5, 20 , [2, 25, 4, 14, 17, 30, 8])
searchDataArray(15, 3 , [2, 25, 4, 14, 17, 30, 8])
searchDataArray(5, 17 , [2, 25, 4])
  
  

