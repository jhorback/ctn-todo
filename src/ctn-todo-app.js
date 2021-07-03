
import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import Style from "./ctn-todo-app.scss";

@customElement("ctn-todo-app")
class TodoApp extends LitElement {

  @property()
  name = 'Name property';

  static styles = Style;

  render() {
    return html`
      <div>
        <h1>Connect.Tech - Todo - Native</h1>
        <span>${this.name}</span>
      </div>
    `;
  }
}