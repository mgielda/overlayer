const style = `
.tooltip { width: 16px;
           height: 16px;
           border-radius: 10px;
           border: 2px solid #000;
           background: rgba(0, 0, 0, .5);
	   display: inline;
	   margin: -8px;
}
`

const appendStyle = (text) => {
  let styleEl = document.createElement('style')
  styleEl.type = 'text/css'
  styleEl.appendChild(document.createTextNode(text))
  document.body.append(styleEl)
}

const overlay = (data, css) => {
  document.addEventListener('DOMContentLoaded', () => {
    appendStyle(style)
    if (typeof css !== undefined) {
      fetch(css)
        .then(response => response.text())
        .then(text => appendStyle(text))
    }
    //data is mandatory, so no checking for undefined
    fetch(data)
      .then((response) => response.text())
      .then((text) => 
    {
      const doc = jsyaml.load(text)
      console.log(doc)
      for (let tip of doc) {
        let el = document.querySelector(tip.sel)
        let div = document.createElement('div')
        div.appendChild(document.createTextNode(tip.txt))
        div.classList.add("tooltip")
        el.parentNode.insertBefore(div, el.nextSibling)
      }
    })
  })
}

//get file
//when complete, eval file
//append style
