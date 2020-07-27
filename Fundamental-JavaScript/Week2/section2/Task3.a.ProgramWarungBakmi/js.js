/* Warung Bakmi */
const stock = {
    bumbu: true,
    ingredient: {
        bakmie: 3,
        kwetiau: 5,
    }
}

const serve = (eat) => {
    return new Promise(resolve => {
        resolve(`Silahkan ${eat} sudah siap dimakan`)
    })
}

const cekIngradient = (menu,quantity) =>{
    return new Promise ((resolve, reject)=>{
        if(stock.ingredient[menu] >= quantity){
            resolve(menu)
        } else {
            reject(`Maaf menu ${menu} tersisa ${stock.ingredient[menu]}`)
        }
    })
}

const cooking = (ready) => {
    return new Promise ((resolve, reject)=>{
        if(stock.bumbu){
            resolve(ready)
        } else {
            reject("Bumbu Habis")
        }
    })
}



const cookingBakmi = (menu,qnt) => {
    cekIngradient(menu,qnt)
    .then(cooking)
    .then(serve)
    .then(resolvedValue => {
      console.log(resolvedValue);
    })
    .catch(rejectedReason => {
      console.log(rejectedReason);
    })
}

cookingBakmi('kwetiau', 6)