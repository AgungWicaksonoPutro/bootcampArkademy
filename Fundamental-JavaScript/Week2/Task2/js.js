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
    const name = [
        'Abigail','Alexandra','Alison',
        'Amanda','Angela','Bella',
        'Carol','Caroline','Carolyn',
        'Deirdre','Diana','Elizabeth',
        'Ella','Faith','Olivia','Penelope'];
    const transformTxt = name.map((item) => {
        return item.toLowerCase();
    }).filter((a)=>{
        return a.indexOf(word.toLowerCase(), 2) > -1;
    })

    console.log(transformTxt)
}


searchName('ol')