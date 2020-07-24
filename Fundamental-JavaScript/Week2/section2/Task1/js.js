const cekHariKerja = (day) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) =>{
                return item === day
            })
            if(cek){
                resolve(cek)
            } else {
                reject(new Error ('Hari ini bukan hari kerja'))
            }
        }, 3000)
    });
}



cekHariKerja('sabtu')
.then((response) => console.log('Hari Kerja'))
.catch((rejectedReason) => console.log(rejectedReason))

/*
then ... catch merupakan handle untuk menangkap (onFulfilled) dan (onRejected) pada promise, then() digunakan untuk menangkap handle (onFulfilled) sedangkan catch() digunakan untuk menangkap (onRejected)
*/

/* 
Try ... Catch merupakan Handle onRejected using async/await, await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFulfilled).
jika promise gagal dilakukan (onRejected) maka kembali lagi kepada prinsip synchronous code. untuk menangani sebuah eror atau tolakan dengan menggunakan try...catch.
*/



const selectDay = async (day) => {
    try {
        const result = await cekHariKerja(day)
    console.log(`Hari ${result} termasuk hari kerja`)
    } catch (rejectedReason) {
        console.log(`${rejectedReason}`)
    }
    
}

selectDay('senin')