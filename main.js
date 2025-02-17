/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Controller.js

class Controller {
  constructor(collapse) {
    this.collapse = collapse;
  }
  init() {
    this.container = document.querySelector(".container");
    this.collapse.createCollapse();
    this.addSubscribe(this.container);
  }
  addSubscribe(element) {
    element.addEventListener("click", this.onClickStart.bind(this));
  }
  onClickStart(e) {
    if (!e.target.classList.contains("start__btn")) {
      return;
    }
    e.preventDefault();
    this.widget = document.querySelector(".widget__body");
    this.widget.classList.toggle("active");
  }
}
;// CONCATENATED MODULE: ./src/js/Collapse.js
class Collapse {
  constructor(container) {
    this.container = container;
  }
  createCollapse() {
    this.bindToDOM();
  }
  static get markup() {
    return `
    <div class="collapse">
        <div class="button__block">
          <button class="btn-reset start__btn">Collapse</button>
        </div>
        <div class="widget__body">
          <p class="widget__text"></p>
        </div>
    </div>`;
  }
  bindToDOM() {
    this.container.insertAdjacentHTML("afterbegin", this.constructor.markup);
    document.querySelector(".widget__text").textContent = "Тут должен быть какой-то очень заумный текст. Но увы! Его здесь нет!";
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const container = document.querySelector(".container");
const collapse = new Collapse(container);
const controller = new Controller(collapse);
controller.init();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;