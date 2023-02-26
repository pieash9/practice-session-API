const myObj  ={
    name: 'pieash',
    id : 1,
    age : 29,
}
const jsonObj = JSON.stringify(myObj);
const objObject = JSON.parse(jsonObj)
console.log(myObj);
console.log(jsonObj);
console.log(objObject);