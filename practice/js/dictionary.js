const loadData = async (inputText) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data[0]);
};

const searchText = () => {
  document.getElementById("btn-search").addEventListener("click", function () {
    const inputText = document.getElementById("input-text").value;
    // console.log(inputText);
    loadData(inputText);
  });
  document.getElementById("audio-container").innerHTML = "";
};
const displayData = (data) => {
  data.phonetics.forEach((element) => {
    const parent = document.getElementById("audio-container");

    const audio = document.createElement("audio");
    audio.src = element.audio;
    const button = document.createElement("button");
    button.innerHTML = "play";
    button.onclick = () => {
      audio.play();
    };
    const container = document.createElement("div");
    container.appendChild(button);
    container.appendChild(audio);
    parent.appendChild(container);
  });
};
searchText();

const loadData2 = () => {
  fetch("https://api.github.com/users?per_page=10")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (data) => {
  console.log(data);
  const parent = document.getElementById("parent-container");
  
  data.forEach((user) => {
    fetch(user.following_url)
    .then(res=> res.json())
    .then(data => console.log(data))
  });
};

loadData2();
