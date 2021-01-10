import { LitElement, html, customElement, css, property } from 'lit-element';
import db from '../data/db';

import { connect } from 'pwa-helpers';
import { store } from '../redux/store';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('product-view')
export class ProductView extends connect(store)(LitElement) {
  static styles = css``;

  @property()
  productId = 1;

  render() {
    return html`
      <h2>${db.products[this.productId].name}</h2>
      <app-product
        .data="${db.products[this.productId]}"
      >
      </app-product>
    `;
  }

  stateChanged(state: any) {
    this.productId = state.params?.id;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'product-view': ProductView;
  }
}
