import { LitElement, html, customElement, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('home-view')
export class HomeView extends LitElement {
  static styles = css``;

  render() {
    return html`
      <h1>home</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-view': HomeView;
  }
}
