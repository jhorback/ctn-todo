
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement("ctn-todo-app")
class TodoApp extends LitElement {

  @property()
  name = 'Name property';

  static styles = css`
    :host {
      font-family: roboto;
      display: block;
      background-color: blue;
      color: white;
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <div>
        <h1>Connect.Tech - Todo - Native</h1>
        <span>${this.name}</span>
      </div>
    `;
  }
}