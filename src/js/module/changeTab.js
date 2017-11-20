export default () => {
  const tabItems = document.getElementsByClassName('js-tab-trigger');

  function changeTab(e) {
    e.preventDefault();

    // 一旦全部非活性に
    Array.prototype.forEach.call(tabItems, (el) => {
      console.log(el);
      console.log(el.classList);
      el.classList.remove('is-active');
    });

    // 選択されたタブだけ活性に
    e.currentTarget.classList.add('is-active')
  }

  Array.prototype.forEach.call(tabItems, (el) => {
    el.addEventListener('click', changeTab);
  })
}