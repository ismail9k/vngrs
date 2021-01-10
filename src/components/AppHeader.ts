import firebase from 'firebase';
import { LitElement, html, customElement, css, property } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../redux/store';
import { pushState, updateUser } from '../redux/actions';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-header')
export class AppHeader extends connect(store)(LitElement) {
  static styles = css`
    * { box-sizing: border-box }
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 20;
      display: flex;
      margin: 0;
      padding: 0.3em 0.6em;
      width: 100%;
      background-color: var(--white);
      box-shadow: 0 1px 20px rgba(85,85,85,0.25);
      font-weight: 600;
    }

    .header-container {
      display: flex;
      flex: 1 0;
      margin: auto;
      max-width: 1300px;
      min-height: 40px;
      align-items: center;
    }

    .header-user {
      line-height: 30px;
      margin: 0 10px;
    }
    .header-brand {
      margin-inline-end: 2em;
      color: var(--primary);
    }
    .header-brand:hover {
      color: var(--black);
    }

    .header-brand h1 {
      font-size: 30px;
      font-weight: bold;
      margin: 0;
    }
    .header-end,
    .header-start {
      margin: 0 10px;
    }
    .header-end {
      display: flex;
      justify-content: flex-end;
      flex: 1;
    }
  `;

  @property({ type: Object })
  private currentUser: any = undefined;

  render() {
    return html`
      <header class="header">
        <div class="header-container">
          <a class="header-brand" href="/home">
            <h1>Vngrs</h1>
          </a>
          <div class="header-start">
            
          </div>
          <div class="header-end">
            ${this.currentUser && html`
              <span class="header-user">Hi ${this.currentUser?.email}</span>
              <app-button @click="${this.handleLogout}">Logout</app-button>
            `}
            <slot></slot>
          </div>
        </div>
      </header>
    `;
  }

  stateChanged(state: any) {
    this.currentUser = state.user;
  }

  handleLogout() {
    firebase.auth().signOut().then(() => {
      store.dispatch(updateUser({ user: undefined }));
      // @ts-ignore
      store.dispatch(pushState(`/signup`));
    }).catch((error) => {
      console.error(error);
      // TODO: An error happened.
    });
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}
