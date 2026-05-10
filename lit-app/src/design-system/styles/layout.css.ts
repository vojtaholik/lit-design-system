import { css } from 'lit-element';

export const layoutStyles = css`
  .mk-container {
    width: min(100% - var(--mk-space-l), var(--mk-container-marketing));
    margin-inline: auto;
  }

  .mk-section {
    padding-block: var(--mk-space-2xl);
  }

  .mk-stack {
    display: grid;
    gap: var(--mk-space-m);
  }
`;
