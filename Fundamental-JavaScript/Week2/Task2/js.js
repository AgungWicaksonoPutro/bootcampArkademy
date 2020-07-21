/*
Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  callback function dengan data sebagai berikut:
const name = [
‘Abigail’, ‘Alexandra’, ‘Alison’,
‘Amanda’, ‘Angela’, ’Bella’,
‘Carol’, ‘Caroline’, ‘Carolyn’,
‘Deirdre’, ‘Diana’, ‘Elizabeth’,
‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]
*/

const searchName = (word, limit, callback) => {
    if (typeof (word) == "string" && typeof (limit) == "number" && typeof (callback) == "function") {
        const name = [
            'Abigail','Alexandra','Alison',
            'Amanda','Angela','Bella',
            'Carol','Caroline','Carolyn',
            'Deirdre','Diana','Elizabeth',
            'Ella','Faith','Olivia','Penelope'];
        
        const transformTxt = name.map((item) => {
            return item.toLowerCase();
        }).filter((a)=>{
            return a.indexOf(word.toLowerCase()) > -1;
        })
        callback(transformTxt, limit);
    } else {
        console.log("Masukan Semua Parameter")
    }
}
const limitName = (arr, limit) =>{
    const result = arr.slice(0,limit)
    console.log(result)
}
    


searchName('an', 3, limitName)