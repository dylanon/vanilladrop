import { emptyNode } from '../utils.js';
import { init } from '../main.js';

export default function reinitialize(newPath, title) {
  if (newPath) {
    // Change the URL in the browser's address bar without reloading the page
    // If a falsey value is supplied for newPath, don't change the URL
    window.history.pushState({}, title, newPath);
  }
  // Initialize the app again
  emptyNode(document.querySelector('#root'));
  init();
}
