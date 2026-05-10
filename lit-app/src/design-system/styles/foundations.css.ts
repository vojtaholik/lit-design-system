import { css } from 'lit-element';

export const foundations = css`
  :host {
    color: var(--mk-color-text);
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  a {
    color: inherit;
  }
`;
