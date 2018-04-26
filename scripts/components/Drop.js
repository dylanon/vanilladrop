const Drop = retrievedMessage => {
  const node = document.createElement('pre');
  node.classList.add('retrieved-drop');
  node.textContent = retrievedMessage;
  return node;
};

export default Drop;
