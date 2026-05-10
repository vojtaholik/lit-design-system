import { LitElement, css, customElement, html, property } from 'lit-element';
import { tokens } from '../../../../tokens/tokens.css';
import { foundations } from '../../../../styles/foundations.css';

@customElement('mk-container')
export class MkContainer extends LitElement {
  static styles = [tokens, foundations, css`:host{display:block}.container{margin-inline:auto;width:min(100% - var(--mk-space-l),var(--mk-container-marketing))}.content{max-width:var(--mk-container-content)}.marketing{max-width:var(--mk-container-marketing)}.wide{max-width:var(--mk-container-wide)}.full{max-width:100%}`];
  @property({ reflect: true }) size: 'content' | 'marketing' | 'wide' | 'full' = 'marketing';
  render() { return html`<div class="container ${this.size}"><slot></slot></div>`; }
}
