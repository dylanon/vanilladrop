const DropInfo = html => {
  const node = document.createElement('p');
  node.classList.add('drop-info');
  node.innerHTML = html;
  return node;
};

export default DropInfo;
