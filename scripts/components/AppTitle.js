import reinitialize from '../actions/reinitialize.js';

const AppTitle = () => {
  // Create the heading
  const node = document.createElement('h1');
  node.classList.add('app-title');
  // Create the link to enable keyboard navigation on this element
  const link = document.createElement('a');
  link.classList.add('app-title__link');
  link.textContent = 'Vanilla Drop';
  link.href = '/';
  // Listen for a click
  link.addEventListener('click', e => {
    e.preventDefault();
    reinitialize('/', 'Vanilla Drop');
  });
  // Add link as a child of the heading
  node.appendChild(link);
  return node;
};

export default AppTitle;
