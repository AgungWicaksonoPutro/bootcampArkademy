/* Beli Sembako */
const inventory = {
    readyStock: true,
    stock : {
        gula: {
            jumlah: 10,
            price: 1000,
        },
        teh: {
            jumlah: 10,
            price: 5000,
        },
        kopi: {
            jumlah: 10,
            price: 1000,
        }
    }
}



const buyItem = (itemName, count, totalPrice) => {
    return new Promise((resolve, reject) => {
        if (inventory.stock[itemName].jumlah >= count && inventory.stock[itemName].price <= totalPrice){
            const changeMoney = totalPrice - inventory.stock[itemName].price;
            inventory.stock[itemName].jumlah -= count;
            resolve(changeMoney)
        } else {
            reject("Tidak Bisa Melanjutkan Transaksi!")
        }
    })
}

const delive = (item) => {
    return new Promise( resolve => {
      resolve(`Ini barang mu dan uang kembalian mu ${item}`)
    })
   }

const buyAItem = (itemName, count, totalPrice) => {
    buyItem(itemName, count, totalPrice)
    .then(delive)
    .then(resolvedValue => {
      console.log(resolvedValue);
    })
    .catch(rejectedReason => {
      console.log(rejectedReason);
    })
}

buyAItem('teh', 10, 9000)