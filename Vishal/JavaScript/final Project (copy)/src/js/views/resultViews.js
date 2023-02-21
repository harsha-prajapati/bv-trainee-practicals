import view from './view';
import icons from 'url:../../img/icons.svg';
class resultViews extends view {
  _parentElement = document.querySelector('.results');
  _Errmessage = `we can not find your requested recipes please search different `;
  _message = '';

  _genrateMarkup() {
    return this._data.map(this._genrateMarkupPreview).join('');
  }
  _genrateMarkupPreview(result) {
    return `
<li class="preview">
  <a class="preview__link " href="#${result.id}">
       <div class="preview__data">
      <h4 class="preview__title">${result.title}</h4>
      <p class="preview__publisher">${result.body}</p>
      <p class="preview__publisher">${result.userId}</p>
    </div>
  </a>
</li>
  `;
  }
}

export default new resultViews();
