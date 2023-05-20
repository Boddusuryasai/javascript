const YoutubeSearchApi = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

let suggestions =[]
function debounce(fun,delay){
 let timer;
 return function (...args){
    clearTimeout(timer);
    timer = setTimeout(()=>fun(args),delay);
 }
}

function getSuggestions(searchQuery){
           fetch(YoutubeSearchApi+searchQuery).then((res)=>{
            return res.json()
           }
           ).then((data)=>{
            suggestions=data;
            renderSuggestions(suggestions)
           })
}

const debouncedFunction = debounce(getSuggestions,2000)
 function renderSuggestions(suggestions){
    console.log(suggestions)
     const ul = document.getElementById("ul");
     ul.innerHTML=""
     suggestions[1].map((e)=>{
        const li = document.createElement("li")
        li.innerText=e;
        ul.appendChild(li)
     })
 }