// Wrap app in an anonymous function that executes immediately
// Keeps methods out of the global scope
(function() {
  // Create a namespace for the app
  const vanilla = {};

  vanilla.createApp = () => {
    // Create content area
    const content = document.createElement('div');
    content.classList.add('content');
    // Create app header
    const header = document.createElement('header');
    header.classList.add('header');
    // Create app title
    const appTitle = document.createElement('h1');
    appTitle.classList.add('app-title');
    appTitle.textContent = 'Vanilla Drop';
    // Create a container for dynamic content
    const dynamicContent = document.createElement('main');
    dynamicContent.classList.add('dynamic-content');
    // Create new drop form
    const form = document.createElement('form');
    form.classList.add('new-drop');
    // Create drop message input
    const messageInput = document.createElement('textarea');
    messageInput.setAttribute(
      'placeholder',
      'Enter a secret message to drop...'
    );
    messageInput.setAttribute('autofocus', '');
    messageInput.classList.add('new-drop__message');
    // Create drop submit button
    const submitButton = document.createElement('button');
    submitButton.classList.add('new-drop__submit');
    submitButton.textContent = 'Make the drop!';
    submitButton.addEventListener('click', vanilla.handleSubmit);
    // Add inputs to form
    form.appendChild(messageInput);
    form.appendChild(submitButton);
    // Add form to dynamic content area
    dynamicContent.appendChild(form);
    // Add title to header
    header.appendChild(appTitle);
    // Add header to content area
    content.appendChild(header);
    // Add dynamic content container to content area
    content.appendChild(dynamicContent);
    // Add form to the app
    const app = document.querySelector('#app');
    app.appendChild(content);
  };

  vanilla.handleSubmit = e => {
    // Prevent page reload
    e.preventDefault();
    // Get the user's message
    const message = document.querySelector('.new-drop__message').value;
    // Make a drop if the message is not blank or only whitespace
    if (message.trim()) {
      vanilla.createDrop(message);
    }
  };

  vanilla.createDrop = message => {
    // Show the loader
    const container = document.querySelector('.dynamic-content');
    vanilla.emptyNode(container);
    container.appendChild(vanilla.createLoader());
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
        vanilla.emptyNode(container);
        // Tell user it succeeded
        const successMessage = document.createElement('p');
        successMessage.classList.add('drop-info');
        successMessage.textContent = `You made a drop! You can retrieve it with this ID: ${
          data.id
        }.`;
        const deletionInfo = document.createElement('p');
        deletionInfo.classList.add('drop-info');
        deletionInfo.textContent =
          'Your drop will be deleted once it is retrieved, or after 24 hours.';
        container.appendChild(successMessage);
        container.appendChild(deletionInfo);
      })
      .catch(err => {
        // Log the error to the console
        console.error(err);
        // Remove the loader
        vanilla.emptyNode(container);
        const failureMessage = document.createElement('p');
        failureMessage.classList.add('drop-info');
        failureMessage.textContent =
          'Oops - something went wrong! Your drop was not stored.';
        container.appendChild(failureMessage);
      });
  };

  vanilla.emptyNode = node => {
    node.childNodes.forEach(child => {
      node.removeChild(child);
    });
  };

  vanilla.createLoader = () => {
    const loader = document.createElement('i');
    loader.classList.add('fas', 'fa-spinner', 'fa-spin', 'fa-2x', 'loader');
    return loader;
  };

  vanilla.init = () => {
    console.log('[APP] Starting app...');
    vanilla.createApp();
    console.log('[APP] App started successfully!');
  };

  // Initialize the app when all resources have loaded
  window.addEventListener('load', () => {
    vanilla.init();
  });
})();
