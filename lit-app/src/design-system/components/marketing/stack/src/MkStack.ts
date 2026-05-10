import { LitElement, css, customElement, html, property } from 'lit-element';
import { tokens } from '../../../../tokens/tokens.css';

@customElement('mk-stack')
export class MkStack extends LitElement {
  static styles = [tokens, css`:host{display:block}.stack{display:grid;gap:var(--gap,var(--mk-space-m))}:host([gap='s']) .stack{--gap:var(--mk-space-s)}:host([gap='m']) .stack{--gap:var(--mk-space-m)}:host([gap='l']) .stack{--gap:var(--mk-space-l)}`];
  @property({ reflect: true }) gap: 's' | 'm' | 'l' = 'm';
  render() { return html`<div class="stack"><slot></slot></div>`; }
}
