import view from './view';
import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
class RecipeView extends view {
  _parentElement = document.querySelector('.recipe');
  _Errmessage = `we can not find your request please try again later `;
  _message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  _genrateMarkup() {
    return `
    <figure class="recipe__fig">
          <img src="${this._data.images}" alt="${this._data.images}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

     
          <div class="recipe__user-generated">
      
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

     

        <div class="recipe__directions">
          <h2 class="heading--2">Description</h2>
          <p class="recipe__directions-text">
           this product
            <span class="recipe__publisher">${this._data.title}</span>. Please
            check out directions at their website.
          </p>
          </a>
        </div>

        `;
    // recipeContainer.innerHTML = '';
    // recipeContainer.insertAdjacentHTML('afterbegin', markup);
  }

  // _genratemarkupIngredints(ing) {
  //   return `
  //     <li class="recipe__ingredient">
  //     <svg class="recipe__icon">
  //       <use href="${icons}#icon-check"></use>
  //     </svg>
  //     <div class="recipe__quantity">${ing.id}</div>
  //     <div class="recipe__description">
  //       <span class="recipe__unit">${ing.price}</span>
  //       ${ing.title}
  //     </div>
  //   </li>
  //     `;
  // }
}

export default new RecipeView();
