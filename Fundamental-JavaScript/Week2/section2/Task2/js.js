const getMonth = (callback) => {
    setTimeout(()=>{
        let error = true;
        let month = ['Januari','February','March','April','May','Juni','July','August','September','October','November','Desember'];
        if (!error){
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000)
}

const viewMont = (eror, data) => {
    if (eror == null) {
        const show =  data.map((item) => {
            console.log(item) })
    } else {
        console.log(eror)
    }
}

getMonth(viewMont);

