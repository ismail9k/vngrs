/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import { LitElement, html, customElement, property, css } from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js';
import { navigate } from './router';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-app')
export class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
    <nav>
      <a href="/home">HOME</a>
      <a href="/login">LOGIN</a>
    </nav>
    <main role="main" class="main-content">
      <index-view class="page" ?active="${this._page === 'index-view'}"></index-view>
      <login-view class="page" ?active="${this._page === 'login-view'}"></login-view>
    </main>
    `;
  }

  firstUpdated() {
    installRouter((location) => navigate(decodeURIComponent(location.pathname)));
  }


  private _page = 'index-view';
  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp;
  }
}
