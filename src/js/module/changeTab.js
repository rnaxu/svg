export default () => {
  const tabItems = document.getElementsByClassName('js-tab-trigger');

  function addToClassList(el, className) {
    const re = new RegExp('(\\s|\\b)' + className + '\\b', 'g');
    const originClass = el.getAttribute('class').replace(re, '');
    const newClass = `${originClass} ${className}`;

    el.setAttribute('class', newClass);
  }

  function removeToClassList(el, className) {
    const re = new RegExp('(\\s|\\b)' + className + '\\b', 'g');
    const originClass = el.getAttribute('class');
    const newClass = originClass.replace(re, '');

    el.setAttribute('class', newClass);
  }

  function changeTab(e) {
    e.preventDefault();

    // 一旦全部非活性に
    Array.prototype.forEach.call(tabItems, (el) => {
      // el.classList.remove('is-active');
      removeToClassList(el, 'is-active')
    });

    // 選択されたタブだけ活性に
    // e.currentTarget.classList.add('is-active');
    addToClassList(e.currentTarget, 'is-active')
  }

  Array.prototype.forEach.call(tabItems, (el) => {
    el.addEventListener('click', changeTab);
  })
}