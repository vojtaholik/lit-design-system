import { LitElement, css, customElement, html, property } from 'lit-element';
import { tokens } from '../../../../tokens/tokens.css';

@customElement('mk-button')
export class MkButton extends LitElement {
  static styles = [tokens, css`
    button { border: 1px solid var(--mk-color-border); border-radius: var(--mk-radius-m); padding: var(--mk-space-xs) var(--mk-space-m); font: inherit; cursor:pointer; }
    button[data-variant='primary'] { background: var(--mk-color-accent); color: var(--mk-color-accent-contrast); border-color: transparent; }
    button[data-variant='ghost'] { background: transparent; color: var(--mk-color-text); }
  `];
  @property({ reflect: true }) variant: 'primary' | 'ghost' = 'primary';
  render() { return html`<button data-variant=${this.variant}><slot></slot></button>`; }
}
