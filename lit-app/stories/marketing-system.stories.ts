import { html } from 'lit-html';
import '../src/design-system/components/marketing';

export default { title: 'Design System/Marketing Landing' };

export const Landing = () => html`
  <mk-container size="marketing" columns="12">
    <mk-col span="12">
      <mk-hero>
        <span slot="eyebrow">Marketing design system</span>
        <span slot="headline">Build conversion pages with Lit and modern CSS.</span>
        <span slot="description"
          >Filtiq-style grid container primitives and stateful components inspired
          by shadcn composition patterns.</span
        >
        <mk-button slot="actions" variant="primary">Get started</mk-button>
        <mk-button slot="actions" variant="ghost">See docs</mk-button>
      </mk-hero>
    </mk-col>

    <mk-col span="12" span-lg="8">
      <mk-section space="m">
        <mk-stack gap="m">
          <mk-disclosure>
            <span slot="summary">Why this container model?</span>
            The container owns page gutters and max width, while the inner 12-column
            grid enables consistent, responsive section composition.
          </mk-disclosure>
        </mk-stack>
      </mk-section>
    </mk-col>
  </mk-container>
`;
