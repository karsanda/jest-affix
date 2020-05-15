function affix(selector) {
  let selectorString = selector || ''
  const nodes = []
  const match = /[#\.\(\{a-zA-Z]/.exec(selector);

  if (!match) return;

  switch(match[0]) {
    case '#':
    case '.':
      nodes.push(document.createElement('div'))
      break
    
    default:
      const tag = /[a-zA-Z0-9]+/.exec(selector);
      selectorString = selectorString.substring(tag.index + tag[0].length);

      nodes.push(document.createElement(tag[0]));
  }

  addAttributes(nodes, selectorString)

  for(const node of nodes) {
    document.body.appendChild(node)
  }
}

function addAttributes(nodes, selectorString) {
  const match = /[\>\+\^\*#\.\[\{\s]/.exec(selectorString)
  
  if (!match) return;

  switch (match[0]) {
    case '#':
      const ids = /[a-zA-Z0-9_\-]+/.exec(selectorString)
      if (!ids) break
      
      for (const node of nodes) {
        node.setAttribute('id', ids[0])
      }
      
      addAttributes(nodes, selectorString.substring(ids.index + ids[0].length))
      break
      
    case '.':
      const classes = /[a-zA-Z0-9_\-]+/.exec(selectorString)
      if (!classes) break
      
      for (const node of nodes) {
        node.setAttribute('class', ((node.getAttribute('class')) ? node.getAttribute('class') + ' ' : '') + classes[0])
      }
      
      addAttributes(nodes, selectorString.substring(classes.index + classes[0].length))
      break
  }
}

module.exports = affix;