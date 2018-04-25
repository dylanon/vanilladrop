export function emptyNode(node) {
  node.childNodes.forEach(child => {
    node.removeChild(child);
  });
}
