import couter from "./couter";
import './style.css';
import Icon from './icon.svg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = `Hello ${couter}`
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());