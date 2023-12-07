import "../styles/style.css"
const URL = "https://hp-api.onrender.com/api/characters";

async function getData(URl){
  const response = await fetch (URL); 
  console.log(response);
}

getData(URL); 