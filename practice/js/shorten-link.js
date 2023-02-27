const shortenLink = async(inputLink) =>{
    const url = `https://api.shrtco.de/v2/shorten?url=${inputLink}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayShortLink(data.result))
}

const displayShortLink = (link) =>{
    console.log(link);
   const shortLinkContainer =  document.getElementById('short-link-container');
   shortLinkContainer.innerHTML=`
   <div class="gap-2 mt-4 text-center>
   <h3 ">Short link: <span id="shortLink">${link.short_link}</span> </h3>
   <button class="btn btn-primary" onclick="myFunction()">Copy link</button>
   </div>
   `
}
function myFunction() {
    // Get the text 
    const copyText = document.getElementById("shortLink");
    console.log(copyText);

    // Copy the text inside the text 
    navigator.clipboard.writeText(copyText.innerText);
    
    // copyText.setSelectionRange(0, 99999);
    // Alert the copied text
    alert("Copied the text: " + copyText.innerText);
  }
  
const inputUserLink =() =>{
    document.getElementById('btn-shorten').addEventListener('click',function (){
        const inputText = document.getElementById('link-submit-field').value ;
        shortenLink(inputText);
    })
}


inputUserLink()
