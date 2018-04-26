import Loader from '../components/Loader.js';
import Drop from '../components/Drop.js';
import DropInfo from '../components/DropInfo.js';
import { emptyNode } from '../utils.js';
import Button from '../components/Button.js';
import reinitialize from '../actions/reinitialize.js';
import { apiUrl } from '../api.js';

export default function retrieveDrop() {
  // Show the user we are retrieving the drop
  const container = document.querySelector('.main-content');
  emptyNode(container);
  container.appendChild(Loader());
  // Get the Drop ID from the URL
  const queryParams = new URLSearchParams(window.location.search);
  const dropId = queryParams.get('drop');
  // Retrieve the drop
  fetch(`${apiUrl}/retrieve/${dropId}`)
    .then(res => res.json())
    .then(data => {
      const { message } = data;
      // Show the drop contents, or explain why nothing was retrieved
      emptyNode(container);
      if (message === null) {
        container.appendChild(
          DropInfo("Sorry! Couldn't find the drop you requested.")
        );
        container.appendChild(
          DropInfo(
            'You may have the wrong drop ID, the drop may have been retrieved already, or it may have expired.'
          )
        );
        container.appendChild(
          DropInfo(
            'All drops expire (are permanently deleted) if they are not retrieved within 24 hours.'
          )
        );
      } else {
        container.appendChild(
          DropInfo('Here are the contents of the drop you requested:')
        );
        container.appendChild(Drop(message));
        container.appendChild(
          DropInfo(
            'This drop has been permanently deleted and cannot be retrieved again.'
          )
        );
      }
    })
    .catch(err => {
      console.error(err);
      // Tell the user something went wrong
      emptyNode(container);
      container.appendChild(DropInfo('Oops - Something went wrong.'));
      container.appendChild(DropInfo('Please refresh the page and try again!'));
    })
    .then(() => {
      // Show button to make another drop
      const AnotherDropButton = Button('Make your own drop');
      AnotherDropButton.classList.add('another-drop');
      container.appendChild(AnotherDropButton);
      // Listen for a click on the another drop button
      const anotherDrop = container.querySelector('.another-drop');
      anotherDrop.addEventListener('click', () =>
        reinitialize('/', 'Vanilla Drop')
      );
    });
}
