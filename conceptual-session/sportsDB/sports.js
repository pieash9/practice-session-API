const searchAllData = (id) => {
  const inputValue = document.getElementById("search-value").value;
  document.getElementById("single-player-details").innerHTML = "";
  document.getElementById("male").classList.add("d-none");
  document.getElementById("female").classList.add("d-none");
  document.getElementById("spinner").classList.remove("d-none");
  //   console.log(URL);
  const searchValue = id || inputValue;
  
  const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${searchValue}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      showPlayerData(data.player);
      document.getElementById("spinner").classList.add("d-none");
    });
};

const showPlayerData = (players) => {
  document.getElementById("search-value").value = "";
  const container = document.getElementById("player-info");
  container.innerHTML = "";
  players.forEach((player) => {
    const { strThumb, strPlayer, strNationality, idPlayer } = player;
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
  
      <div class="card h-100 my-5">
        <img src="${
          strThumb ? strThumb : "https://picsum.photos/600/600 "
        }" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${strPlayer}</h5>
          <p class="card-text">Nationality: ${strNationality}</p>
        </div>
        <div class="d-flex gap-3 mb-3">
        <button onClick="singlePlayer('${idPlayer}')" type="button" class="btn btn-info ms-3">Details</button>
        <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>

  `;
    container.appendChild(div);
  });
};
const singlePlayer = (id) => {
  const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSinglePlayer(data.players[0]));
};

const showSinglePlayer = (data) => {
  console.log(data);
  const { strThumb, strPlayer, strDescriptionEN, strGender } = data;
  const container = document.getElementById("single-player-details");
  const div = document.createElement("div");
  if (strGender === "Male") {
    document.getElementById("male").classList.remove("d-none");
  } else {
    document.getElementById("female").classList.remove("d-none");
  }
  div.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${strThumb}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Name: ${strPlayer}</h5>
                <p class="card-text">Details: ${
                  strDescriptionEN.slice(0, 150) + "..."
                }</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
    </div>
    
    `;
  container.appendChild(div);
};
searchAllData("messi")
