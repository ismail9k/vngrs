import { LitElement, html, customElement, css, property } from 'lit-element';
import db from '../data/db';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('product-view')
export class ProductView extends LitElement {
  static styles = css``;

  @property()
  productId = 1;

  render() {
    return html`
      <h1>Product</h1>
      <app-product
        .data="${db.products[this.productId]}"
      >
      </app-product>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'product-view': ProductView;
  }
}
