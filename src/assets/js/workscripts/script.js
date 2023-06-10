'use strict';

const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;
  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};

const headnav = document.querySelector('.headnav');
const headbutton = document.querySelector('.headbutton');

let flag = false;

headbutton.addEventListener('click', (e) => {
  let display = event.currentTarget.style.display;
  if(!flag) {
    fadeIn(headnav, 500, 'block');
    flag = true;
  } else {
    fadeOut(headnav, 500);
    flag = false;
  }
});
