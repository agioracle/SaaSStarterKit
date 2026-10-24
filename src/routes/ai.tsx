import { createFileRoute } from '@tanstack/react-router';
import { AiStudio } from '../components/ai/studio';
import { seo } from '../lib/seo';
export const Route = createFileRoute('/ai')({
  head: () =>
    seo('/ai', {
      title: 'AI studio',
      description: 'Ten useful tools for text, images, search, decisions, and speech.',
    }),
  component: AiStudio,
});
