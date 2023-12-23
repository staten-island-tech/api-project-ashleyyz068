import "../styles/style.css";
import { DOMSelectors } from "./Dom";

// DOMSelectors.form.addEventListener("submit", async function (event) {
//   event.preventDefault();
//   function insertCards(arr){
  
//   }
//   const x = DOMSelectors.letter.value; 
// const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`;

//   async function getData (URL){
//   try{
//     const response = await fetch (URL); 
//     if (response != 200){
//       throw new Error (response.statusText);
//     }
//     console.log(URL); 
//   }

//   catch (error){
//     console.log(error, "oppsie daisy")
//   }
// }
// getData(URL);



// });


DOMSelectors.form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const x = DOMSelectors.letter.value;
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`;
  function insertCards(data){
    // data.array.forEach(element => {
    //   DOMSelectors.container.insertAdjacentHTML(
        
    //   )
    // });
  }
  async function getData (URL){
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    insertCards(data)
    console.log(URL); 
  } catch (error) {
    console.error(error); // Log specific error details to the console
  }
}
getData(URL)
});
