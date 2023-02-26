const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

  document.getElementById('found').innerText = person.found;
//person 1
  document.getElementById('person-name1').innerText = person.result[0].name.common;
  document.getElementById('age1').innerText = person.result[0].age;
  document.getElementById('street1').innerText = person.result[0].address.street;
  document.getElementById('house1').innerText = person.result[0].address.house;
//person 2
  function setValueById(id,value){
    document.getElementById(id).innerText = value;
  }
  setValueById('person-name2',person.result[1].name.common);
  setValueById('age2',person.result[1].age);
  setValueById('street2',person.result[1].address.street);
  setValueById('house2',person.result[1].address.house);