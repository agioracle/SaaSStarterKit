import { createFileRoute } from '@tanstack/react-router';
import { PricingSection } from '../components/blocks/pricing';
import { FaqSection } from '../components/blocks/faqs';
import { seo } from '../lib/seo';
export const Route = createFileRoute('/pricing')({
  head: () => seo('/pricing', { title: 'Pricing' }),
  component: () => (
    <>
      <PricingSection headingLevel={1} />
      <FaqSection />
    </>
  ),
});
