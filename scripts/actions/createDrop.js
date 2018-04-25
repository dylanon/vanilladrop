import DropInfo from '../components/DropInfo.js';
import Loader from '../components/Loader.js';
import { emptyNode } from '../utils.js';

export default function createDrop(message) {
  // Show the loader
  const container = document.querySelector('.main-content');
  emptyNode(container);
  container.appendChild(Loader());
  // Send message to backend
  fetch('http://drop-service.herokuapp.com/drop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message
    })
  })
    .then(res => res.json())
    .then(data => {
      // Log the response to the console
      console.log(data);
      // Remove the loader
      emptyNode(container);
      // Tell user it succeeded
      const successMessage = DropInfo(
        `You made a drop! You can retrieve it with this ID: ${data.id}.`
      );
      const deletionInfo = DropInfo(
        'Your drop will be deleted once it is retrieved, or after 24 hours.'
      );
      container.appendChild(successMessage);
      container.appendChild(deletionInfo);
    })
    .catch(err => {
      // Log the error to the console
      console.error(err);
      // Remove the loader
      emptyNode(container);
      const failureMessage = DropInfo(
        'Oops - something went wrong! Your drop was not stored.'
      );
      container.appendChild(failureMessage);
    });
}
