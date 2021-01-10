import { LitElement, html, customElement, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-spinner')
export class AppSpinner extends LitElement {
  static styles = css`
    .spinner {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2000;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--white);
    }
    .spinner:after {
      display: block;
      margin: 20px auto;
      width: 64px;
      height: 64px;
      border: 4px var(--black) solid;
      border-top: 4px var(--primary) solid;
      border-radius: 50%;
      content: '';
      animation: circleRotate 0.6s infinite linear;
    }
    @keyframes circleRotate {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(359deg);
      }
    }
  `;
  render() {
    return html`<div class="spinner"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-spinner': AppSpinner;
  }
}
