import { async } from 'regenerator-runtime';
import recipeView from './views/recipeView';
import { API_URL, RES_PER_PAGE } from './config';
import { getJson } from './helpers';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultperPage: RES_PER_PAGE,
  },
};

export const loadrecipe = async function (id) {
  try {
    // const result = await fetch(`${API_URL}/${id}`);

    // const data = await result.json();
    // if (!result.ok) throw new Error(`${data.message},(${result.status})`);
    // let recipe = data.data.recipe;

    const data = await getJson(`${API_URL}${id}`);
    const { recipe } = data.data;
    // console.log(recipe);
    state.recipe = {
      // id: recipe.id,
      // title: recipe.title,
      // publisher: recipe.publisher,
      // sourceUrl: recipe.source_Url,
      // image: recipe.image_url,
      // servings: recipe.servings,
      // cookingTime: recipe.cooking_time,
      // ingredints: recipe.ingredients,
      id: res.id,
      title: res.title,
      body: res.body,
      userId: res.userId,
    };
    console.log(state.recipe);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const loadSearchResult = async function (query) {
  try {
    state.search.query = query;
    const data = await getJson(`${API_URL}${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map(res => {
      return {
        // id: res.id,
        // title: res.title,
        // publisher: res.publisher,
        // image: res.image_url,
        // description: res.description,
        // image: res.image,
        // price: res.price,

        id: res.id,
        title: res.title,
        body: res.body,
        userId: res.userId,
      };
    });
    console.log(state.search.results);
  } catch (e) {
    alert(' Too many requests from this IP, please try again in an hour!');
  }
};

// loadSearchResult('mango');

export const getSearchResultPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultperPage;
  const end = page * state.search.resultperPage;
  return state.search.results.slice(start, end);
};
