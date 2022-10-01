const style = `
.tooltip { width:16px;
           height:16px;
           border-radius:10px;
           border:2px solid #fff;
           position:absolute;
           background:rgba(255,255,255,.5);
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
      //for (let tip in doc) {
      //  let el = document.querySelector(tip.sel) {
      //    
      //  }
      //}
    })
  })
}

//get file
//when complete, eval file
//append style
