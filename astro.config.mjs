import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkSlug from 'remark-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  site: 'https://leesin0222.github.io',
  base: '/',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkSlug],
    rehypePlugins: [
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            class: 'anchor-link',
          },
        },
      ],
    ],
  },
});

