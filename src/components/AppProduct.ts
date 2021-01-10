import { LitElement, html, customElement, css, property } from 'lit-element';
import { GenericObject } from '../redux/types';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-product')
export class AppProduct extends LitElement {
  static styles = css`
    * { box-sizing: border-box; }
    .product {
      border: 1px solid var(--gray);
      display: flex;
      flex-direction: column;
      padding: 20px;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      box-shadow: 0 1px 10px rgba(85,85,85,0.2);
    }
    .product-image {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      padding: 20px;
      max-height: 300px;
      overflow: hidden;
    }
    .product-image img {
      max-width: 100%;
    }
    .product-title {
      margin: 0.5em 0;
      width: 100%;
      font-size: 16px;
    }
    .product-description {
      display: none;
      margin-top: 30px;
      width: 100%;
      color: #999;
    }
    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      padding-top: 20px;
      width: 100%;
      border-top: 1px solid #e5e5e5;
    }
  `;

  @property()
  data: GenericObject = {};

  render() {
    return html`
    <div class="product">
      <div class="product-image">
        <img src="${this.data.featuredPhoto}" alt="${this.data.name}" />
      </div>
      <div class="product-info">
        <h2 class="product-title">${this.data.name}</h2>
        <p class="product-description">${this.data.description}</p>
        <div class="product-footer"><strong class="product-price">$${this.data.price}</strong>
            <app-button>ADD TO CART</app-button>
        </div>
      </div>
    </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-product': AppProduct;
  }
}
