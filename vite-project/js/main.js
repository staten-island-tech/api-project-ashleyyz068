import "../styles/style.css"
const URL = "www.themealdb.com/api/json/v1/1/";

async function getData(URl){
  const response = await fetch (URL); 
  const data = await response.json();
  console.log(data); 
}

getData(URL); 