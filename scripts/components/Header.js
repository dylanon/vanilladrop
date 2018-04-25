import AppTitle from './AppTitle.js';

const Header = () => {
  const node = document.createElement('header');
  node.classList.add('header');
  node.appendChild(AppTitle());
  return node;
};

export default Header;
