import printMe from './print.js';
import "./style.css"

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');


  element.innerHTML = `Hello Home`

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  
  element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);


if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
     document.body.removeChild(element);
     element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
     document.body.appendChild(element);
   })
 }
