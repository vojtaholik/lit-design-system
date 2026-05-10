import {
  LitElement,
  css,
  customElement,
  html,
  property,
} from 'lit-element';
import { tokens } from '../../../../tokens/tokens.css';
import { foundations } from '../../../../styles/foundations.css';

@customElement('mk-container')
export class MkContainer extends LitElement {
  static styles = [
    tokens,
    foundations,
    css`
      :host {
        display: block;
        --mk-container-max: var(--mk-container-marketing);
        --mk-container-gutter: var(--mk-space-m);
        --mk-grid-columns: 12;
      }

      .container {
        display: grid;
        grid-template-columns:
          [full-start] minmax(var(--mk-container-gutter), 1fr)
          [content-start] minmax(0, var(--mk-container-max))
          [content-end] minmax(var(--mk-container-gutter), 1fr)
          [full-end];
      }

      .content {
        grid-column: content;
        min-width: 0;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(var(--mk-grid-columns), minmax(0, 1fr));
        gap: var(--mk-space-m);
      }

      :host([size='content']) {
        --mk-container-max: var(--mk-container-content);
      }

      :host([size='marketing']) {
        --mk-container-max: var(--mk-container-marketing);
      }

      :host([size='wide']) {
        --mk-container-max: var(--mk-container-wide);
      }

      :host([size='full']) {
        --mk-container-max: 100%;
      }
    `,
  ];

  @property({ reflect: true })
  size: 'content' | 'marketing' | 'wide' | 'full' = 'marketing';

  @property({ type: Number, reflect: true })
  columns = 12;

  render() {
    return html`
      <div class="container">
        <div class="content">
          <div class="grid" style=${`--mk-grid-columns:${this.columns}`}>
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
