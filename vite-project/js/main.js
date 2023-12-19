import "../styles/style.css";
import { DOMSelectors } from "./Dom";
const URL = " https://www.themealdb.com/api/json/v1/1/search.php?f=a";
async function test(){
    let res = await  fetch(URL)
    let data = await res.json()
    
  }
                                     
  
                                       