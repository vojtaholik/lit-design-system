import { css } from 'lit-element';

export const tokens = css`
  :host {
    --mk-color-bg: oklch(99% 0 0);
    --mk-color-surface: oklch(100% 0 0);
    --mk-color-text: oklch(22% 0.02 255);
    --mk-color-text-muted: oklch(50% 0.02 255);
    --mk-color-border: oklch(90% 0.01 255);
    --mk-color-accent: oklch(57% 0.2 258);
    --mk-color-accent-contrast: white;

    --mk-space-2xs: clamp(0.25rem, 0.2rem + 0.2vw, 0.375rem);
    --mk-space-xs: clamp(0.5rem, 0.4rem + 0.35vw, 0.75rem);
    --mk-space-s: clamp(0.75rem, 0.6rem + 0.4vw, 1rem);
    --mk-space-m: clamp(1rem, 0.8rem + 0.5vw, 1.5rem);
    --mk-space-l: clamp(1.5rem, 1.25rem + 0.8vw, 2.25rem);
    --mk-space-xl: clamp(2rem, 1.8rem + 1vw, 3rem);
    --mk-space-2xl: clamp(3rem, 2.5rem + 1.4vw, 4rem);

    --mk-text-1: clamp(0.875rem, 0.83rem + 0.2vw, 1rem);
    --mk-text-2: clamp(1rem, 0.9rem + 0.3vw, 1.125rem);
    --mk-text-3: clamp(1.25rem, 1rem + 0.5vw, 1.5rem);
    --mk-text-4: clamp(1.75rem, 1.3rem + 1vw, 2.5rem);
    --mk-text-5: clamp(2.25rem, 1.8rem + 1.8vw, 3.75rem);

    --mk-radius-s: 0.375rem;
    --mk-radius-m: 0.625rem;
    --mk-radius-l: 1rem;

    --mk-shadow-s: 0 1px 2px rgb(15 23 42 / 0.08);
    --mk-shadow-m: 0 8px 24px rgb(15 23 42 / 0.08);

    --mk-container-content: 48rem;
    --mk-container-marketing: 72rem;
    --mk-container-wide: 90rem;
  }
`;
