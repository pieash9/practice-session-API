const loadCountries = async() => {
  const url = `https://restcountries.com/v3.1/${name}`
    const res  = await fetch(url)
    const data = await res.json()
    showCountries(data)

};

const showCountries = (countries)=>{
for(const country of countries){
    
}
}




loadCountries()