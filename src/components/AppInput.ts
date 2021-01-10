import { LitElement, html, customElement, css, property } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-input')
export class AppInput extends LitElement {
  static styles = css`
    .input {
      box-sizing: border-box;
      border: 1px solid var(--primary);
      border-radius: 5px;
      padding: 5px 10px;
      margin-bottom: 10px;
      font-size: 1em;
      width: 100%;
      display: inline-block;
    }
  `;

  @property()
  placeholder = '';
  @property()
  value = '';
  @property()
  type = '';

  render() {
    return html`
      <input
        class="input"
        placeholder=${this.placeholder}
        value=${this.value}
        type="${this.type}"
        @input=${this._handleInput}
        @change=${this._handleChange}
      />
    `;
  }

  _handleInput(event: any) {
    this.value = event.target.value;
    this.dispatchEvent(new Event('input'));
  }

  _handleChange(event: any) {
    this.value = event.target.value;
    this.dispatchEvent(new Event('change'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-input': AppInput;
  }
}
