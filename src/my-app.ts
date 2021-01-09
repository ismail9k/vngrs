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

import { LitElement, html, customElement, property, css, TemplateResult } from 'lit-element';
import { installRouter, connect } from 'pwa-helpers';
import { store } from './redux/store';
import { navigate } from './redux/actions';

import './components';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-app')
export class MyApp extends connect(store)(LitElement) {
  static styles = css`
    :host {
      display: block;
      padding: 20px;
    }
    * {
      box-sizing: border-box;
    }
  `;


  @property()
  name = 'World';

  @property()
  private _page = 'index-view';


  render() {

    return html`
    <nav>
      <a href="/home">HOME</a>
    </nav>
    <main role="main" class="main-content">
      ${this.getCurrentView()}
    </main>
    `;
  }

  firstUpdated() {
    // @ts-ignore
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
  }

  stateChanged(state: State) {
    this._page = state.currentView;
  }

  getCurrentView(): TemplateResult {
    const page = this._page as string;
    const routes: GenericObject = {
      '': html`<home-view active="${true}"></home-view>`,
      '/': html`<home-view active="${true}"></home-view>`,
      '/home': html`<home-view active="${true}"></home-view>`,
      '/product': html`<product-view active="${true}"></product-view>`,
      '/signup': html`<signup-view active="${true}"></signup-view>`,
    };
    if (!Object.keys(routes).includes(page)) {
      return html`<notfound-view></notfound-view>`;
    }
    return routes[page];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp;
  }
}
