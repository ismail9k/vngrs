import { LitElement, html, customElement, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('signup-view')
export class SignupView extends LitElement {
  static styles = css``;

  render() {
    return html`
      <h1>signup</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'signup-view': SignupView;
  }
}
