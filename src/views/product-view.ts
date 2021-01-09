import { LitElement, html, customElement, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('product-view')
export class ProductView extends LitElement {
  static styles = css``;

  render() {
    return html`
      <h1>Product</h1>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'product-view': ProductView;
  }
}
