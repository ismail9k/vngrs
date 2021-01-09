import { LitElement, html, customElement, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-button')
export class AppButton extends LitElement {
  static styles = css`
    .button {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0.3em 0.9em;
      outline: none;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      border-radius: 4px;
      color: var(--white);
      vertical-align: middle;
      text-align: center;
      text-decoration: none;
      font-size: 14px;
      line-height: 1.3;
      cursor: pointer;
      user-select: none;
      background-color: var(--primary);
    }

    .button:hover {
      opacity: 0.8;
    }
  `;

  render() {
    return html`
      <button class="button"><slot></slot></button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-button': AppButton;
  }
}
