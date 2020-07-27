fetch('https://Jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => data.map((showData)=>{
    console.log(showData.name)
})).catch(reject =>console.log(reject))