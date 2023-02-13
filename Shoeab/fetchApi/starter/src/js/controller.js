import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// console.log(icons);
// const recipeContainer = document.querySelector('.recipe');

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
// console.log("Test 1");










const controlRecipes = async function () {

  try {
    //taking the id from the window 
    const id = window.location.hash.slice(1);
    console.log(id)
;

    if (!id) return;


    ///renderspinner function call here
    recipeView.renderSpinner();

    //loading the recipe
    await model.loadRecipe(id)
;
    // const { recipe } = model.state;

    //Rendering recipe
    recipeView.render(model.state.recipe);

    //this is code to insert the data in the ingredients






  }

  catch (Error) {
    // console.log(`${error} ************ `);
    alert(Error);
  }
};
// showReceipe();


//old way of doing it
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

//new way using an array and call function on for each

const init=function()
{
recipeView.addHandlerRender(controlRecipes);
}
init();