const loadAllData = () => {
  url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAllData(data.slice(0, 6)));
};

const showAllData = (countries) => {
  const countryContainer = document.getElementById("countries-info");
  countryContainer.innerHTML = "";
  countries.forEach((country) => {
    // console.log(country.cca2);

    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-96 h-96 bg-base-100 shadow-2xl bg-cyan-50">
        <figure class="px-10 pt-10">
            <img src="${country.flags.png}" alt="Shoes" class="rounded-xl border-2 shadow-2xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${country.name.common}</h2>
            <p>Population : ${country.population}</p>
            <div class="card-actions">
            <label onclick="showSingleCountry('${country.cca2}')" class="btn btn-primary " for="my-modal-3" class="btn">Show Details</label>
            </div>
        </div>
    </div>
        
        `;
    countryContainer.appendChild(div);
  });
};

// const showDetails = (id) => {
//   const URL = `https://restcountries.com/v3.1/alpha/${id}`;
//   fetch(URL)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };
loadAllData();

const showAllDataTogether = () => {
  url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAllData(data));
};
const showSingleCountry = (id) => {
  const URL = `https://restcountries.com/v3.1/alpha/${id}`;
  // console.log(URL);
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSingleCountryDataModal(data[0]));
};
const showSingleCountryDataModal = (value) => {
  console.log(Object.keys(value.currencies)[0]);
  const container = document.getElementById("modal-info");

   // Remove the existing modal element before creating a new one
   const existingModal = container.querySelector(".modal");
   if (existingModal) {
     container.removeChild(existingModal);
   }

  const div = document.createElement("div");
  div.classList.add("modal");
  div.innerHTML = `
   
        <div class="modal-box relative text-center">
          <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <img class="mx-auto mb-3" src="${value.flags.png}" alt="">
          <h3 class="text-lg font-bold">${value.name.common}</h3>
          <p class="py-4">Population: ${value.population}</p>
          <p class="pb-4">Currency: ${Object.keys(value.currencies)[0]}</p>
        </div>

  `;
  container.appendChild(div);
};
