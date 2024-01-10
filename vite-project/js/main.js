import "../styles/style.css";
import { DOMSelectors } from "./dom";

function insertCards(arr){
  arr.forEach(element => {
    DOMSelectors.container.insertAdjacentHTML( "beforeend", `<div class="card">
    <div class="card-img">
      <img src=${element.strMealThumb} alt="">
    </div>
    <div class="card-content">
      <h3 class="card-title"> ${element.strMeal} </h3>
      <h4 class="card-title2"> Recipe: </h4>
      <p class="card-rec"> ${element.strInstructions}</p>
        <p>Place of origin: ${element.strArea}</p>
      <div class="video">
        <a href= ${element.strYoutube}><button class="button-32" role="button">Video Tutorial</button></a>
      </div>
    </div>
  </div>`

    )
  });
}
function insertCards2(arr){
  arr.forEach(element => {
    DOMSelectors.container.insertAdjacentHTML( "beforeend", `<div class="card2">
    <img src=${element.strMealThumb} alt="" class="card-img2"> 
  <div class="card-content">
    <h3 class="card-title"> ${element.strMeal} </h3>
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

async function defaulted(URL){
  try{
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();

    const arr = data.meals 

    insertCards(arr); 
  console.log(data); 

  clearInput ();
  } catch (error){
    console.error(error); 
  }
} 

defaulted(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`); 


function display (link, search, form, type){ // link, search(search by...), type(card type)
  DOMSelectors[form].addEventListener("submit", function (event) {
  event.preventDefault();
  clearCards() 
  
  const x = DOMSelectors[search].value;
  const URL = `https://www.themealdb.com/api/json/v1/1/`+link+`=${x}`;
  console.log(URL); 
    
  

  async function getData (URL){
  try {
    
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();

    const arr = data.meals 
    if(type===true){
      insertCards(arr); 
    }else{
      insertCards2(arr);
    }
    console.log(data); 

    clearInput (); 
  } catch (error) {
    console.error(error); 
  }
}
getData(URL)
});
}
display(`search.php?f`, 'letter', 'form1',true );  
display(`search.php?s`, 'name', 'form2',true );  
display(`filter.php?a`, 'area', 'form3', false );
display(`filter.php?i`, 'ing', 'form4', false );
display(`filter.php?c`, 'cat', 'form5', false );


// DOMSelectors.form1.addEventListener("submit", function (event) {
//   event.preventDefault();
//   clearCards() 
//   const x = DOMSelectors.letter.value;
//   const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${x}`;
  

//   async function getData (URL){
//   try {
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//     const data = await response.json();
//     const arr = data.meals
//     insertCards(arr); 
//     clearInput ()

//   } catch (error) {
//     console.error(error); // Log specific error details to the console
//   }
// }
// getData(URL)
// });

// DOMSelectors.form2.addEventListener("submit", function (event) {
//   event.preventDefault();
//   clearCards() 
//   const x = DOMSelectors.name.value;
//   const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${x}`;
  

//   async function getData (URL){
//   try {
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//     const data = await response.json();
//     const arr = data.meals
//     insertCards(arr); 
//     clearInput ()

//   } catch (error) {
//     console.error(error); // Log specific error details to the console
//   }
// }
// getData(URL)
// });


// DOMSelectors.form3.addEventListener("submit", function (event) {
//   event.preventDefault();
//   clearCards() 
//   const x = DOMSelectors.area.value;
//   const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${x}`;
  

//   async function getData (URL){
//   try {
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//     const data = await response.json();
//     const arr = data.meals
//     insertCards2(arr); 
//     clearInput ()

//   } catch (error) {
//     console.error(error); // Log specific error details to the console
//   }
// }
// getData(URL)
// });

// DOMSelectors.form4.addEventListener("submit", function (event) {
//   event.preventDefault();
//   clearCards() 
//   const x = DOMSelectors.ing.value;
//   const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${x}`;
  

//   async function getData (URL){
//   try {
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//     const data = await response.json();
//     const arr = data.meals
//     insertCards2(arr); 
//     clearInput ()

//   } catch (error) {
//     console.error(error); // Log specific error details to the console
//   }
// }
// getData(URL)
// });

// DOMSelectors.form5.addEventListener("submit", function (event) {
//   event.preventDefault();
//   clearCards() 
//   const x = DOMSelectors.cat.value;
//   const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`;
  

//   async function getData (URL){
//   try {
//     const response = await fetch(URL);
//     if (!response.ok) {
//       throw new Error(`Request failed with status: ${response.status}`);
//     }
//     const data = await response.json();
//     const arr = data.meals
//     insertCards2(arr); 
//     clearInput (); 
//     console.log(data); 

//   } catch (error) {
//     console.error(error); // Log specific error details to the console
//   }
// }
// getData(URL)
// });




