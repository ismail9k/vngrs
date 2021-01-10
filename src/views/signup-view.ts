import firebase from 'firebase';
import { LitElement, html, customElement, css, property } from 'lit-element';
import { pushState, updateUser } from '../redux/actions';
import { store } from '../redux/store';
import { sanitizeData } from '../utils';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('signup-view')
export class SignupView extends LitElement {
  static styles = css`
    .login-form {
      border: 1px solid var(--gray);
      padding: 40px;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      box-shadow: 0 1px 10px rgba(85,85,85,0.2);
    }
  `;

  @property()
  email = '';
  @property()
  password = '';
  @property()
  errors = "";
  @property({ type: Boolean })
  isSubmitting = false;

  render() {
    return html`
      <app-header></app-header>
      <h1>Sign up</h1>
      <form class="login-form" @submit="${this.handleSubmit}">
        <app-input
          placeholder="Email"
          value="${this.email}"
          type="text"
          @input=${(event: any) => this.email = event.target.value}
        ></app-input>
        <app-input
          placeholder="Password"
          type="password"
          value="${this.password}"
          @input=${(event: any) => this.password = event.target.value}
        ></app-input>

        <app-button @click="${this.handleSubmit}">Submit</app-button>
      </from>
      ${this.errors && html`<span>${this.errors}</span>`}
    `;
  }
  handleSubmit(event: Event) {
    if (this.isSubmitting) return;
    this.isSubmitting = true;
    event.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(({ user }) => {
        const userData = sanitizeData(['email'], user);
        store.dispatch(updateUser({ user: userData }));
        // @ts-ignore
        store.dispatch(pushState(`/home`));
      })
      .catch((error: Error) => {
        console.error(error);
        this.errors = error.message;
      }).finally(() => (this.isSubmitting = false));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'signup-view': SignupView;
  }
}
