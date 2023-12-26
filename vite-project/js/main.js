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

function clearInput (){
  DOMSelectors.letter.value =""; 
  DOMSelectors.name.value ="";
  DOMSelectors.area.value="";
  DOMSelectors.ing.value="";
  DOMSelectors.cat.value="";
}

function clearCards() {
  const container = DOMSelectors.container;
  container.innerHTML = '';
}

DOMSelectors.form1.addEventListener("submit", function (event) {
  event.preventDefault();
  clearCards() 
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
    clearInput ()

  } catch (error) {
    console.error(error); // Log specific error details to the console
  }
}
getData(URL)
});

DOMSelectors.form2.addEventListener("submit", function (event) {
  event.preventDefault();
  clearCards() 
  const x = DOMSelectors.name.value;
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`;
  

  async function getData (URL){
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    const arr = data.meals
    insertCards(arr); 
    clearInput ()

  } catch (error) {
    console.error(error); // Log specific error details to the console
  }
}
getData(URL)
});


DOMSelectors.form3.addEventListener("submit", function (event) {
  event.preventDefault();
  clearCards() 
  const x = DOMSelectors.area.value;
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${x}`;
  

  async function getData (URL){
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    const arr = data.meals
    insertCards(arr); 
    clearInput ()

  } catch (error) {
    console.error(error); // Log specific error details to the console
  }
}
getData(URL)
});

DOMSelectors.form4.addEventListener("submit", function (event) {
  event.preventDefault();
  clearCards() 
  const x = DOMSelectors.ing.value;
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`;
  

  async function getData (URL){
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    const arr = data.meals
    insertCards(arr); 
    clearInput ()

  } catch (error) {
    console.error(error); // Log specific error details to the console
  }
}
getData(URL)
});

DOMSelectors.form5.addEventListener("submit", function (event) {
  event.preventDefault();
  clearCards() 
  const x = DOMSelectors.cat.value;
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`;
  

  async function getData (URL){
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    const arr = data.meals
    insertCards(arr); 
    clearInput ()

  } catch (error) {
    console.error(error); // Log specific error details to the console
  }
}
getData(URL)
});




