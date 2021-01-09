import { LitElement, html, customElement, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('login-view')
export class LoginView extends LitElement {
  static styles = css``;

  render() {
    return html`
      <h1>LOGIN</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'login-view': LoginView;
  }
}
