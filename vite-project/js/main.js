import "../styles/style.css"
const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata/images/media/meals/llcbn01574260722.jpg/preview";

async function test(){
  let res = await  fetch(URL)
  let data = await res.json()
  console.log(data)
}
test()                                         