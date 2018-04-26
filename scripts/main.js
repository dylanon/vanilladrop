import App from './components/App.js';
import handleSubmit from './actions/handleSubmit.js';
import retrieveDrop from './actions/retrieveDrop.js';

function mountApp() {
  // Mount App to #root
  const root = document.querySelector('#root');
  root.appendChild(App());
}

function listenForEvents() {
  const submitButton = document.querySelector('.new-drop__submit');
  const retrieveButton = document.querySelector('.retrieve-button');
  if (submitButton) {
    submitButton.addEventListener('click', handleSubmit);
  }
  if (retrieveButton) {
    retrieveButton.addEventListener('click', retrieveDrop);
  }
}

export function init() {
  mountApp();
  listenForEvents();
}

// Initialize the app when all resources have loaded
window.addEventListener('load', () => {
  init();
});
