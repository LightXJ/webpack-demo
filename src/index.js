import couter from "./couter";

function component() {
  const element = document.createElement('div');

  element.innerHTML = `Hello ${couter}`

  return element;
}

document.body.appendChild(component());