import { LitElement, html, customElement, css, property } from 'lit-element';
import { pushState } from '../redux/actions';
import { store } from '../redux/store';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('signup-view')
export class SignupView extends LitElement {
  static styles = css``;

  @property()
  email = '';
  @property()
  password = '';

  render() {
    return html`
      <app-header></app-header>
      <h1>Sign up</h1>
      <form>
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

        <app-button type="submit" @click="${this.handleSubmit}">Submit</app-button>
      </from>
    `;
  }
  handleSubmit() {
    console.log('LOGIN');

    // @ts-ignore
    store.dispatch(pushState(`/home`));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'signup-view': SignupView;
  }
}
