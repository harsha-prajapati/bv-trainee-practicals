import * as model from './model';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView';
import { async } from 'regenerator-runtime';
import searchView from './views/searchView';
import resultViews from './views/resultViews';
import paginationView from './views/paginationView';
// const recipeContainer = document.querySelector('.recipe');

// console.log('testing start');
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    recipeView.spineer();

    await model.loadrecipe(id);

    // const { recipe } = model.state;

    recipeView.render(model.state.recipe);

    paginationView.render(model.state.search);
    // const recipeView = new recipeView(model.state.recipe);
  } catch (e) {
    recipeView.renderError();
  }
};
// controlRecipe();
// ['hashchange', 'load'].forEach(ev =>
//   window.addEventListener(ev, controlRecipe)
// );

const controlSearchResults = async function () {
  try {
    resultViews.spineer();
    const query = searchView.getQuery();
    if (!query) return;
    // await model.loadSearchResult(query);
    // console.log(model.state.search.results);

    await model.loadSearchResult(query);
    // resultViews.render(model.state.search.results);
    resultViews.render(model.getSearchResultPage());
  } catch (e) {
    console.log(e);
  }
};

// controlSearchResults();
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
