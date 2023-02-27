const loadCountryByLanguage = async (searchText) => {
  const url = `https://restcountries.com/v3.1/capital/${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCountryByLanguage(data[0]);
};
const displayCountryByLanguage = (language) => {
    console.log(language);
  const countryContainer = document.getElementById("country-container");
  const div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
        <div class="card">
            <img src="${language.flags.png}" class="card-img-top" alt="...">

            <div class="card-body">
                <h5 class="card-title">${language.name.common}</h5>
                <p>${language.flags.alt}</p>
            </div>
        </div>
  
  `;
  countryContainer.appendChild(div)
};

const searchCountryByLanguage = () =>{
    document.getElementById('btn-search').addEventListener('click',function(){
        const searchText = document.getElementById('search-field').value ;
        console.log(searchText);
        loadCountryByLanguage(searchText);
    })
}
searchCountryByLanguage()
