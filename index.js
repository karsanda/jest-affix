function affix(selector) {
  let selectorString = selector || ''
  const nodes = []
  const match = /[#\.(\s|\s\>\s|\>)\(\{a-zA-Z]/.exec(selector);
  if (!match) return;

  switch(match[0]) {
    case '#':
    case '.':
      nodes.push(document.createElement('div'))
      break

    case ' ':
      selectorString = selectorString.substring(match.index + match[0].length);
      const childrenTag = /$#|\./.exec(selectorString);

      if (childrenTag) {
        nodes.push(document.createElement('div'))
        break
      }

    default:
      const tag = /[a-zA-Z0-9]+/.exec(selector);
      selectorString = selectorString.substring(tag.index + tag[0].length);

      nodes.push(document.createElement(tag[0]));
  }

  modify(nodes, selectorString)

  for(const node of nodes) {
    document.body.appendChild(node)
  }

  return nodes
}

function modify(nodes, selectorString) {
  let attributesString = selectorString || ''
  let childNodes = null
  const match = /[(\s\>\s|\s|\>)\+\^#\.\[\{]/.exec(attributesString)
  if (!match) return;

  switch (match[0]) {
    case '#':
      const ids = /[a-zA-Z0-9_\-]+/.exec(attributesString)
      if (!ids) break
      
      for (const node of nodes) {
        node.setAttribute('id', ids[0])
      }
      
      modify(nodes, attributesString.substring(ids.index + ids[0].length))
      break
      
    case '.':
      const classes = /[a-zA-Z0-9_\-]+/.exec(attributesString)
      if (!classes) break
      
      for (const node of nodes) {
        node.setAttribute('class', ((node.getAttribute('class')) ? node.getAttribute('class') + ' ' : '') + classes[0])
      }
      
      modify(nodes, attributesString.substring(classes.index + classes[0].length))
      break
    
    case ' > ':
    case '>':
    case ' ':
      childNodes = affix(attributesString)

      for (const node of nodes) {
        node.appendChild(childNodes[0])
      }
      break;
  }
}

module.exports = affix;