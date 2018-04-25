const DropInfo = text => {
  const node = document.createElement('p');
  node.classList.add('drop-info');
  node.textContent = text;
  return node;
};

export default DropInfo;
