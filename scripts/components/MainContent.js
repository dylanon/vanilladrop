import NewDropForm from './NewDropForm.js';
import Button from './Button.js';

const MainContent = () => {
  const node = document.createElement('main');
  node.classList.add('main-content');
  // Render different content depending on route
  if (window.location.pathname === '/retrieve/') {
    const RetrieveButton = Button('Retrieve drop!');
    RetrieveButton.classList.add('retrieve-button');
    node.appendChild(RetrieveButton);
  } else {
    node.appendChild(NewDropForm());
  }
  return node;
};

export default MainContent;
