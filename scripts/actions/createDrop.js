import DropInfo from '../components/DropInfo.js';
import Loader from '../components/Loader.js';
import Button from '../components/Button.js';
import RetrievalLink from '../components/RetrievalLink.js';
import { emptyNode } from '../utils.js';
import reinitialize from '../actions/reinitialize.js';

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
      // Create the retrieval URL
      const retrievalUrl = `${window.location.origin}/retrieve/?drop=${
        data.id
      }`;
      // Tell user it succeeded
      const successMessage = DropInfo(
        `You made a drop! You can retrieve it at this URL:`
      );
      const retrievalInfo = DropInfo('');
      retrievalInfo.appendChild(RetrievalLink(retrievalUrl));
      const deletionInfo = DropInfo(
        'Your drop will be deleted once it is retrieved, or after 24 hours.'
      );
      container.appendChild(successMessage);
      container.appendChild(retrievalInfo);
      container.appendChild(deletionInfo);
      // Prevent app reload if the user clicks the retrieval link
      // Reinitialize the app in retrieval mode, and route them to the right URL
      const retrievalLink = container.querySelector('.retrieval-link');
      retrievalLink.addEventListener('click', e => {
        e.preventDefault();
        reinitialize(`/retrieve/?drop=${data.id}`, 'Retrieve | Vanilla Drop');
      });
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
    })
    .then(() => {
      // Show button to make another drop
      const AnotherDropButton = Button('Make another drop');
      AnotherDropButton.classList.add('another-drop');
      container.appendChild(AnotherDropButton);
      // Listen for a click on the another drop button
      const anotherDrop = container.querySelector('.another-drop');
      anotherDrop.addEventListener('click', () => reinitialize(null));
    });
}
