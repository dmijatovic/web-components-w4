/**
 * OurClient class
 * custom web component receives props object
 * @param {object} props
 */
class OurClient extends HTMLElement {
  set props(client) {
    let html = this.extractClientProps(client)
    this.innerHTML = `
      <div class="our-client-card">
        ${html}
      </div class="our-client-card">
    `
  }
  /**
   * Extract all properties and wrap with html
   * @param {*} props
   */
  extractClientProps(props, prefix = null) {
    let html = ''
    let keys = Object.keys(props)

    // debugger
    keys.map(key => {
      let item = props[key]
      if (typeof item === 'object') {
        prefix = key
        html += this.extractClientProps(item, key)
      } else {
        html += this.buildPropHtml(key, item, prefix)
      }
    })
    return html
  }
  /**
   * Build property html function
   * wraps key value pair into a div
   * with specific classes
   * @param {*} key
   * @param {*} value
   */
  buildPropHtml(key, value, prefix = null) {
    let html = `<div class="our-client-prop-record">`

    if (prefix) {
      html += `
        <span class="our-client-prop-key">
          ${prefix}-${key}
        </span class="our-client-prop-key">
      `
    } else {
      html += `
        <span class="our-client-prop-key">
          ${key}
        </span class="our-client-prop-key">
      `
    }
    html += `
      <span class="our-client-prop-value">
        ${value}
      </span class="our-client-prop-value">
      </div>
    `
    return html
  }
}

//define custom element
customElements.define('our-client-card', OurClient)
