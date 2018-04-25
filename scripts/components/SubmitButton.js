const SubmitButton = () => {
  const node = document.createElement('button');
  node.classList.add('new-drop__submit');
  node.textContent = 'Make the drop!';
  return node;
};

export default SubmitButton;
