const loadAdvice = async (searchText) => {
 try{
    const url = `	https://api.adviceslip.com/advice/search/${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
  //   console.log(data);
    if(data.slips.length > 0){
      showAdvice(data.slips);
      
    }else{
  
      alert (data.message.text)
    }
 }
catch(error){
    console.log(error);
}
};

const showAdvice = (advices) => {
console.log(advices);
advices.forEach(advice =>{
    // console.log(advice);
    const adviceContainer = document.getElementById('advice-container');
    const div = document.createElement('div');
    div.classList.add('col-6','h-25')
    div.innerHTML = `
            <div class="  bg-secondary  rounded-4 p-3">
                <h5 class="text-center pt-2 text-info">Advice No :# ${advice.id} </h5>
                <h4 class="text-center p-3 text-white">${advice.advice}</h4>
            </div>
    `
    adviceContainer.appendChild(div)
})
};

const searchAdvice =() =>{
    document.getElementById('btn-search').addEventListener('click',function(){
        const searchText = document.getElementById('search-field').value;
        loadAdvice(searchText);
    })
}
searchAdvice ()
