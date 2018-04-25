import Header from './Header.js';
import MainContent from './MainContent.js';

const App = () => {
  // Create content area
  const node = document.createElement('div');
  node.classList.add('app');
  // Add header to App
  node.appendChild(Header());
  // Add main to App
  node.appendChild(MainContent());
  return node;
};

export default App;
