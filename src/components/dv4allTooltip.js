/**
 * Toolip custom element
 * v0.0.1 Jan 2019
 */
class dv4allTooltip extends HTMLElement {
  constructor() {
    super()
    console.log('dv4allTooltip...constructor')
    //intialize local variables
    this._tooltipContainer
    this._tooltipHtml
  }
  /**
   * Lifecycle method fired after custom
   * element is attached to DOM
   */
  connectedCallback() {
    console.log('dv4allTooltip...connectedCallback')
    let icon = document.createElement('span')
    icon.innerHTML = ' (?)'
    /**
     * Listen to mouse events
     * Note! we need to bind(this) to keep
     * this reference within class
     */
    icon.addEventListener(
      'mouseenter',
      this._showTooltip.bind(this)
    )
    icon.addEventListener(
      'mouseleave',
      this._removeTooltip.bind(this)
    )
    //append element
    this.appendChild(icon)
    //get attribute value
    //debugger
    if (this.hasAttribute('text')) {
      this._tooltipHtml = this.getAttribute('text')
    } else {
      this._tooltipHtml = 'This is content of tooltip'
    }
  }
  /**
   * Lifecycle method fired on attribute change
   */
  attributeChangedCallback() {
    console.log('dv4allTooltip...attributeChangedCallback')
  }
  /**
   * Lifcycle method fired after custom
   * element is unmounted from the DOM
   */
  disconnectedCallback() {
    console.log('dv4allTooltip...disconnectedCallback')
  }
  /**
   * Show tooltip - local method use _ at start of the method
   * to indicate internal class use only
   * NOTE! method can be called
   * outside of class (all methods are public)
   */
  _showTooltip() {
    console.log('dv4allTooltip...mouseover icon')
    //debugger
    if (this._tooltipContainer === undefined) {
      const el = document.createElement('div')
      el.innerHTML = this._tooltipHtml
      this._styleElement(el)
      this.appendChild(el)
      this._tooltipContainer = el
    }
  }
  /**
   * Remove tooltip element from DOM on mouseleave
   */
  _removeTooltip() {
    console.log('dv4allTooltip...mouseleave icon')
    //debugger
    if (this._tooltipContainer !== undefined) {
      this.removeChild(this._tooltipContainer)
      this._tooltipContainer = undefined
    }
  }
  /**
   * Apply basic styles to tooltip container element
   * @param {*} el
   */
  _styleElement(el) {
    // el.style =
    //  'position:absolute;top:0;left:0;padding:1rem;border:1px solid grey'
    el.style.position = 'absolute'
    this._getMousePosition()
    el.style.top = 0
    el.style.left = 0
    el.style.backgroundColor = 'black'
    el.style.color = 'white'
    el.style.border = '1px solid grey'
    el.style.borderRadius = '4px'
    el.style.padding = '1rem'
  }
  _getMousePosition() {
    debugger
    let x = document.clientX,
      y = document.clientY
    return {
      x,
      y
    }
  }
}

/**
 * Define custom element method
 */
customElements.define('dv4all-tooltip', dv4allTooltip)
