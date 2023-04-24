export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    let className = support == true ? 'webp' : 'no-webp';
    document.querySelector('html').classList.add(className);
  });
}

export function toggleMobileMenu(e) {
  e.preventDefault();
  const menu = document.querySelector('.burger__menu');
  const menuList = document.querySelector('.burger__menu-list');
  const btnInner = document.querySelector('.burger__btn-inner');
  menu.classList.toggle('burger__menu--active');
  btnInner.classList.toggle('burger__btn-inner--active');
  document.body.classList.toggle('locked');
  menu.addEventListener('click', (e)=> {
    if(e.target != menuList) {
      menu.classList.remove('burger__menu--active');
      btnInner.classList.remove('burger__btn-inner--active');
      document.body.classList.remove('locked');
    }
  })
}
