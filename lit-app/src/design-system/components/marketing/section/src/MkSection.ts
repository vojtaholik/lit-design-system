import { LitElement, css, customElement, html, property } from 'lit-element';
import { tokens } from '../../../../tokens/tokens.css';

@customElement('mk-section')
export class MkSection extends LitElement {
  static styles = [tokens, css`:host{display:block}section{padding-block:var(--space,var(--mk-space-2xl))}:host([space='s']) section{--space:var(--mk-space-m)}:host([space='m']) section{--space:var(--mk-space-xl)}:host([space='l']) section{--space:var(--mk-space-2xl)}`];
  @property({ reflect: true }) space: 's' | 'm' | 'l' = 'l';
  render() { return html`<section><slot></slot></section>`; }
}
