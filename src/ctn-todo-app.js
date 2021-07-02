
const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      font-family: Roboto;
      margin: 0;
    }
  </style>
  <div>
    <h1>Connect.Tech - Todo - Native</h1>
  </div>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('ctn-todo-app', TodoApp);