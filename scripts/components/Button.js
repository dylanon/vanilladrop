const Button = (buttonText = 'Submit') => {
  const node = document.createElement('button');
  node.classList.add('button');
  node.textContent = buttonText;
  return node;
};

export default Button;
