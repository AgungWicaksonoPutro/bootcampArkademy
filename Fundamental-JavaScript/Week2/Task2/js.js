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
    if (typeof (word) == "string"  && typeof (limit) == "number" && typeof (callback) == "function") {
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
        if (transformTxt.length != 0){
            callback(transformTxt, limit);
        } else {
            console.log(`Keyword "${word}" tidak ada`)
        }
        
    } else {
        console.log(`Pastikan semua parameter terisi dan format benar, example: (string, number, function)
        anda memasukan (${typeof word}, ${typeof limit}, ${typeof callback})`)
    }
}
const limitName = (arr, limit) =>{
    const result = arr.slice(0,limit)
    console.log(result)
}
    


searchName("", 3, limitName)