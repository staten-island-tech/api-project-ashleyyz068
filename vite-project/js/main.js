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

function insertCards(arr){
  arr.forEach(element => {
    DOMSelectors.container.insertAdjacentHTML( "beforeend", `<div class="card">
    <div class="card-img">
      <img src=${element.strMealThumb} alt="">
    </div>
    <div class="card-content">
      <h2 class="card-title"> ${element.strMeal} </h2>
      <h3 class="card-title2"> Recipe</h3>
      <p class="card-rec"> ${element.strInstructions}</p>
        <p>Place of origin: britian</p>
      <div class="video">
        <a href= ${element.strYoutube}><button class="button-32" role="button">Video Tutorial</button></a>
      </div>
    </div>
  </div>`
      
    )
  });
}

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  const x = DOMSelectors.letter.value;
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`;
  

  async function getData (URL){
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    const arr = data.meals
    insertCards(arr); 

  } catch (error) {
    console.error(error); // Log specific error details to the console
  }
}
getData(URL)
});
