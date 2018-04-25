import Loader from '../components/Loader.js';
import { emptyNode } from '../utils.js';

export default function retrieveDrop() {
  // Show the user we are retrieving the drop
  const container = document.querySelector('.main-content');
  emptyNode(container);
  container.appendChild(Loader());
  // Get the Drop ID from the URL
  const queryParams = new URLSearchParams(window.location.search);
  const dropId = queryParams.get('drop');
  // Retrieve the drop
  fetch(`http://drop-service.herokuapp.com/retrieve/${dropId}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}
