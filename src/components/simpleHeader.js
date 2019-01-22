class SimpleHeader extends HTMLElement {
  set content(html) {
    // debugger
    this.innerHTML = `
      <section>${html}</section>
    `
  }
}

//define custom element
customElements.define('simple-header', SimpleHeader)
