import MessageInput from './MessageInput.js';
import Button from './Button.js';

const NewDropForm = () => {
  const node = document.createElement('form');
  node.classList.add('new-drop');
  const SubmitButton = Button('Make the drop!');
  SubmitButton.classList.add('new-drop__submit');
  node.appendChild(MessageInput());
  node.appendChild(SubmitButton);
  return node;
};

export default NewDropForm;
