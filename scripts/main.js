import App from './components/App.js';
import handleSubmit from './actions/handleSubmit.js';

function mountApp() {
  // Mount App to #root
  const root = document.querySelector('#root');
  root.appendChild(App());
}

function listenForEvents() {
  const submitButton = document.querySelector('.new-drop__submit');
  submitButton.addEventListener('click', handleSubmit);
}

function init() {
  console.log('[APP] Starting app...');
  mountApp();
  listenForEvents();
  console.log('[APP] App started successfully!');
}

// Initialize the app when all resources have loaded
window.addEventListener('load', () => {
  init();
});
