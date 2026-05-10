import { html } from 'lit-html';
import '../src/design-system/components/marketing';

export default { title: 'Design System/Marketing Landing' };

export const Landing = () => html`
  <mk-container size="marketing">
    <mk-hero>
      <span slot="eyebrow">Marketing design system</span>
      <span slot="headline">Build conversion pages with Lit and modern CSS.</span>
      <span slot="description">Filtiq-style layout primitives and stateful components inspired by shadcn composition patterns.</span>
      <mk-button slot="actions" variant="primary">Get started</mk-button>
      <mk-button slot="actions" variant="ghost">See docs</mk-button>
    </mk-hero>

    <mk-section space="m">
      <mk-stack gap="m">
        <mk-disclosure>
          <span slot="summary">Why no Tailwind?</span>
          CSS tokens and layout primitives keep brand styling centralized and portable across stacks.
        </mk-disclosure>
      </mk-stack>
    </mk-section>
  </mk-container>
`;
