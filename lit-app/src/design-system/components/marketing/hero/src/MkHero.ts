import { LitElement, css, customElement, html } from 'lit-element';
import { tokens } from '../../../../tokens/tokens.css';

@customElement('mk-hero')
export class MkHero extends LitElement {
  static styles = [tokens, css`
    :host { display:block; }
    .hero { padding: var(--mk-space-2xl) 0; display:grid; gap: var(--mk-space-l); }
    .eyebrow { color: var(--mk-color-text-muted); font-size: var(--mk-text-1); }
    h1 { font-size: var(--mk-text-5); line-height: 1.1; max-width: 18ch; }
    p { font-size: var(--mk-text-2); max-width: 62ch; color: var(--mk-color-text-muted); }
    .actions { display:flex; gap: var(--mk-space-s); flex-wrap: wrap; }
  `];
  render() { return html`<section class="hero"><div class="eyebrow"><slot name="eyebrow"></slot></div><h1><slot name="headline"></slot></h1><p><slot name="description"></slot></p><div class="actions"><slot name="actions"></slot></div></section>`; }
}
