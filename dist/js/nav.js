'use strict';

class navBar {
  constructor () {
    // element selectors
    this.toggleMenuButtonEl = document.querySelector('.js-menu');
    this.navbarEl = document.querySelector('.js-navigator');
    this.backgroundEl = document.querySelector('.js-intrigue');

    // bindings
    this.toggleAnimation = this.toggleAnimation.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.hideNavbar = this.hideNavbar.bind(this);

    this.addEventListeners();
  }

  addEventListeners () {
    this.toggleMenuButtonEl.addEventListener('click', this.toggleAnimation);
    this.toggleMenuButtonEl.addEventListener('click', this.toggleNavbar);
    this.backgroundEl.addEventListener('click', this.hideNavbar);
  }

  /**
   * Toggle the visibility of the navigation bar
   */
  toggleNavbar () {
    this.navbarEl.classList.toggle('navigator--collapse');
    this.navbarEl.classList.toggle('navigator--expand');
    this.toggleMenuButtonEl.classList.toggle('md-light');
    this.toggleMenuButtonEl.classList.toggle('md-dark');
  }

  hideNavbar () {
    this.navbarEl.classList.remove('navigator--expand');
    this.navbarEl.classList.add('navigator--collapse');
    if (this.toggleMenuButtonEl.innerHTML == 'close') {
      this.toggleAnimation();
    }
    else {
      return;
    }
  }

  toggleAnimation () {
    this.toggleMenuButtonEl.classList.toggle('menu__toggle--animate');
    if (this.toggleMenuButtonEl.classList.contains('menu__toggle--animate')) {
        this.toggleMenuButtonEl.innerHTML = 'close';
    } else {
      this.toggleMenuButtonEl.innerHTML = 'menu';
    }
  }
}

new navBar();
