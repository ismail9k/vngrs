import { LitElement, html, customElement, css } from 'lit-element';
import { pushState } from '../redux/actions';
import { store } from '../redux/store';

import db from '../data/db';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('home-view')
export class HomeView extends LitElement {
  static styles = css`
    .gallery {
      display: grid;
      margin-bottom: 30px;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      grid-gap: 20px;
    }
  `;

  render() {
    return html`
      <h1>Home</h1>

      <div class="gallery">
        ${[...db.products].splice(0, 12).map((item: GenericObject, index: number) => {
          return html`<app-product
            .data="${item}"
            @click="${() => this.handleRouting(index)}"
          ></app-product>`;
        })}
      </div>
    `;
  }

  handleRouting(id: number) {
    store.dispatch(pushState(`/product/${id}`));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-view': HomeView;
  }
}
