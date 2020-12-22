import { getColor, getInitials } from "./utils";

type AvatarPropsType = {
  name: string;
  size: number;
}

const _props: AvatarPropsType = {
  name: "",
  size: 60,
};

class Avatar extends HTMLElement {
  props: AvatarPropsType = { ..._props };

  constructor() {
    super();
  }

  static get observedAttributes() {
    return Object.keys(_props);
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

  private init() {
    Object.keys(this.props).forEach(k => {
      if (this.hasAttribute(k)) {
        this.props[k] = this.getAttribute(k);
      }
    });
  }

  private render() {
    if (!this.shadowRoot) {
      return;
    }

    this.shadowRoot.innerHTML = '';
    const template = document.createElement('div');
    template.innerHTML = `
    <svg version="1.1" viewBox="0 0 50 50" width=${this.props.size} height=${this.props.size}>
      <circle
        fill="${getColor(this.props.name)}"
        stroke="#fff"
        stroke-width="2"
        cx="25"
        cy="25"
        r="24"
        opacity="1" />
      <text x="25" y="30" text-anchor="middle" fill="#000" opacity="0.8">
        ${getInitials(this.props.name)}
      </text>
    </svg>
    `;

    this.shadowRoot.appendChild(template);
  }
}

customElements.define('af-avatar', Avatar);