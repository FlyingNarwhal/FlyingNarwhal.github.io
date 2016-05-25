'use strict';

let validate = function () {
  let key = document.querySelector('#form__email').value;
  if (/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(key)) {
    validEmail();
  } else {
    invalidEmail();
  }
};

let validEmail = function () {
  let invalidEmailEl = document.querySelector('.form__email-element');
  invalidEmailEl.classList.remove('form__email-element--invalid');
}

let invalidEmail = function () {
  let invalidEmailEl = document.querySelector('.form__email-element');
  invalidEmailEl.classList.add('form__email-element--invalid');
}
