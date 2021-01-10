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
import { installRouter, connect } from 'pwa-helpers';
import { store } from './redux/store';
import { navigate, pushState } from './redux/actions';
import { defaultView } from './routes';

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
    .main-content {
      margin-top: 60px;
    }
  `;


  @property({ type: Boolean })
  private isLoading = true;

  @property()
  private currentView = defaultView;

  @property({ type: Object })
  private currentUser: any = undefined;


  render() {
    if (this.isLoading) {
      return html`<span>Loading...</span>`;
    }
    return html`
    <main role="main" class="main-content">
      ${this.currentUser?.email}
      ${this.currentView}
    </main>
    `;
  }

  firstUpdated() {
    // @ts-ignore
    installRouter((location) => store.dispatch(navigate(location)));
  }

  stateChanged(state: any) {
    console.log('state', state);
    this.currentView = state.currentView;
    this.currentUser = state.user;
    this.isLoading = state.isLoading;

    if (!(state.isLoading || state.user || state.route?.isPublic)) {
      // @ts-ignore
      store.dispatch(pushState(`/signup`));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-app': MyApp;
  }
}
