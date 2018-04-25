const Loader = () => {
  const node = document.createElement('i');
  node.classList.add('fas', 'fa-spinner', 'fa-spin', 'fa-2x', 'loader');
  return node;
};

export default Loader;
