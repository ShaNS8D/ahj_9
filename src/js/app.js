import Controller from "./Controller";
import Collapse from "./Collapse";

const container = document.querySelector(".container");
const collapse = new Collapse(container);

const controller = new Controller(collapse);
controller.init();
