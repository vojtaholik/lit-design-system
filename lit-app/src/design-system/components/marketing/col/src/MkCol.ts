import { LitElement, css, customElement, html, property } from 'lit-element';

@customElement('mk-col')
export class MkCol extends LitElement {
  static styles = css`
    :host {
      display: block;
      grid-column: span var(--mk-col-span, 12);
      min-width: 0;
    }

    @media (min-width: 48rem) {
      :host {
        grid-column: span var(--mk-col-span-md, var(--mk-col-span, 12));
      }
    }

    @media (min-width: 72rem) {
      :host {
        grid-column: span
          var(--mk-col-span-lg, var(--mk-col-span-md, var(--mk-col-span, 12)));
      }
    }
  `;

  @property({ type: Number, reflect: true }) span = 12;
  @property({ type: Number, attribute: 'span-md', reflect: true }) spanMd?: number;
  @property({ type: Number, attribute: 'span-lg', reflect: true }) spanLg?: number;

  updated() {
    this.style.setProperty('--mk-col-span', String(this.span));
    if (this.spanMd) this.style.setProperty('--mk-col-span-md', String(this.spanMd));
    if (this.spanLg) this.style.setProperty('--mk-col-span-lg', String(this.spanLg));
  }

  render() {
    return html`<slot></slot>`;
  }
}
