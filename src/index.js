import _ from 'lodash';
import Print from './print';

function component() {
  const element = document.createElement('div');
  element.innerText = 'element'

  // Note that because a network request is involved, some indication
   // of loading would need to be shown in a production-level site/app.
   element.onclick = Print.bind(null, 'Hellow webpack!');
   return element;
}

document.body.appendChild(component());