const AppTitle = () => {
  const node = document.createElement('h1');
  node.classList.add('app-title');
  node.textContent = 'Vanilla Drop';
  return node;
};

export default AppTitle;
