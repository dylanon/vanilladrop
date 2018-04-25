const MessageInput = () => {
  const node = document.createElement('textarea');
  node.setAttribute('placeholder', 'Enter a secret message to drop...');
  node.setAttribute('autofocus', '');
  node.classList.add('new-drop__message');
  return node;
};

export default MessageInput;
