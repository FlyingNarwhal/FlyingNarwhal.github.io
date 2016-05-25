'use strict';

class flip {
  constructor () {
    this.titleEl = document.querySelector('.js-title');
    this.formEl = document.querySelector('.js-form');
    this.emailIconEl = document.querySelector('.js-form-toggle');

    this.flipElement = this.flipElement.bind(this);

    this.addEventListeners();
  }

  addEventListeners () {
    this.emailIconEl.addEventListener('click', this.flipElement);
  }

  flipElement () {
    this.titleEl.classList.toggle('intrigue__title--flipped');
    this.formEl.classList.toggle('intrigue__form--flipped');
  }
}

new flip();
