const loadCountries = async (region) => {
  const url = `https://restcountries.com/v3.1/region/${region}`;
  const res = await fetch(url);
  const data = await res.json();
  showCountries(data);
};

const showCountries = (countries) => {
  countries.forEach((country) => {
    // console.log(country);
    const countriesContainer = document.getElementById("countries-container");
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
              <div class="card w-full bg-base-100 shadow-xl border-2 h-[15rem] p-3">
              <figure class="px-10 pt-10 w-50 ">
                <img  src="${country.flags.png}" alt="Shoes" class="rounded-xl w-full shadow-2xl border-2" />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">${country.name.common}</h2>
                <p>Capital: ${country.capital[0]}</p>
                </div>
              </div>
            </div>

    `;
    countriesContainer.appendChild(div);

  });
  
};

// get country by region
const loadCountryByRegion = (region,) => {
  document.getElementById(region).addEventListener("click", () => {
    document.getElementById("countries-container").innerHTML = ""
    loadCountries(region);
  });
};

loadCountryByRegion('asia');
loadCountryByRegion('africa');
loadCountryByRegion('europe');
loadCountryByRegion('america');
loadCountryByRegion('oceania');
