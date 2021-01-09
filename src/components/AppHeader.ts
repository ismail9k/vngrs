import { LitElement, html, customElement, css, property } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('app-header')
export class AppHeader extends LitElement {
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

    .header-brand {
      margin-left: 0.5em;
    }
    .header-end {
      display: flex;
      justify-content: flex-end;
      flex: 1;
    }
  `;


  render() {
    return html`
      <header class="header">
        <div class="header-container">
          <div class="header-brand">
            _Ismail9K
          </div>
          <div class="header-end">
            <slot></slot>
          </div>
        </div>
      </button>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': AppHeader;
  }
}
