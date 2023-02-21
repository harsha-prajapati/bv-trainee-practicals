import view from './view';
import icons from 'url:../../img/icons.svg';
class paginationView extends view {
  _parentElement = document.querySelector('.pagination');
  _genrateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultperPage
    );

    if (curPage === 1 && numPages > 1) {
      return 'ab';
    }
    if (curPage === numPages && numPages > 1) {
      return `
        <button data-goto="${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
        </button>
      `;
    }
    if (curPage < numPages) {
      return 'af';
    }
  }
}
export default new paginationView();
