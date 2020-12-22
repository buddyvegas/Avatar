export abstract class HTMLWebComponent<T> extends HTMLElement {
  props: T;

  constructor() {
    super();
  }

  static get observedAttributes(): Array<string> {
    return [];
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
    }

    this.init();
    this.render();
  }

  attributeChangedCallback(key: string, oldValue: string, newValue: string) {
    Object.keys(this.props).forEach(k => {
      if (k === key && oldValue !== newValue) {
        this.props[k] = newValue;
      }
    });

    this.render();
  }

  private init(): void {
    Object.keys(this.props).forEach(k => {
      if (this.hasAttribute(k)) {
        this.props[k] = this.getAttribute(k);
      }
    });
  }

  abstract render(): void;
}