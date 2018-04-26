const RetrievalLink = hrefUrl => {
  const node = document.createElement('a');
  node.classList.add('retrieval-link');
  node.href = hrefUrl;
  node.textContent = hrefUrl;
  return node;
};

export default RetrievalLink;
