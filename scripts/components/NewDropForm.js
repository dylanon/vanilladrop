import MessageInput from './MessageInput.js';
import SubmitButton from './SubmitButton.js';

const NewDropForm = () => {
  const node = document.createElement('form');
  node.classList.add('new-drop');
  node.appendChild(MessageInput());
  node.appendChild(SubmitButton());
  return node;
};

export default NewDropForm;
