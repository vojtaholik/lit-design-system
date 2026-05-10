import { LitElement, css, customElement, html, property } from 'lit-element';
import { tokens } from '../../../../tokens/tokens.css';

@customElement('mk-disclosure')
export class MkDisclosure extends LitElement {
  static styles = [tokens, css`details{border:1px solid var(--mk-color-border);border-radius:var(--mk-radius-m);padding:var(--mk-space-s) var(--mk-space-m);background:var(--mk-color-surface)}summary{cursor:pointer;font-weight:600}.content{padding-top:var(--mk-space-s);color:var(--mk-color-text-muted)}`];
  @property({ type: Boolean, reflect: true }) open = false;

  private onToggle(e: Event) {
    const nextOpen = (e.currentTarget as HTMLDetailsElement).open;
    this.open = nextOpen;
    this.dispatchEvent(new CustomEvent('open-change', { detail: { open: nextOpen } }));
  }

  render() {
    return html`<details ?open=${this.open} @toggle=${this.onToggle}><summary><slot name="summary"></slot></summary><div class="content"><slot></slot></div></details>`;
  }
}
