import createDrop from './createDrop.js';

export default function handleSubmit(e) {
  // Prevent page reload
  e.preventDefault();
  // Get the user's message
  const message = document.querySelector('.new-drop__message').value;
  // Make a drop if the message is not blank or only whitespace
  if (message.trim()) {
    createDrop(message);
  }
}
