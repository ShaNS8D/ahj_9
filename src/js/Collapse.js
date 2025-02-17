export default class Collapse {
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
    document.querySelector(".widget__text").textContent =
      "Тут должен быть какой-то очень заумный текст. Но увы! Его здесь нет!";
  }
}
