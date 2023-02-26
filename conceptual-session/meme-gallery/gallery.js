const loadMeme = () => {
  const URL = "https://meme-api.com/gimme/20";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showMeme(data.memes));
};

const showMeme = (memes) => {
  memes.slice(0, 12).forEach((meme) => {
    console.log(meme.url);
    const memeContainer = document.getElementById("section");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-full h-72 shadow-2xl">
      <figure><img class="h-72" src=${meme.url} alt="car!"/></figure>
    </div>
        
    `;
    memeContainer.appendChild(div);
  });
};

loadMeme();
