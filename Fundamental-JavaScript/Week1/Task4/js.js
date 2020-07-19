// Ubahlah data  tersebut menggunakan spread operator menjadi: 
// name: nama anda
// email: email anda
// hobby: hobi anda
// Ambilah data “street dan city” tersebut menggunakan destructuring

let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address:{
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
          },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

console.log(data);

let newData = {...data};
newData.name = "Agung Wicaksono Putro";
newData.email = "wiputrosnc@gmal.com";
newData.hobby = ["Traveling", "Food Hunter","Futsal"]

console.log(newData);

let {street, city} = data.address;
console.log(street, city);