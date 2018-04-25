import NewDropForm from './NewDropForm.js';

const MainContent = () => {
  // Create a container for dynamic content
  const node = document.createElement('main');
  node.classList.add('main-content');
  node.appendChild(NewDropForm());
  return node;
};

export default MainContent;
