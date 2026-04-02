import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Jonnie Spratley',
  tagline: 'I build things using JavaScript.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://jonniespratley.me',
  baseUrl: '/',

  organizationName: 'jonniespratley',
  projectName: 'site',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/profilepic.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Jonnie Spratley',
      items: [
        {to: '/projects', label: 'Projects', position: 'left'},
        {to: '/publications', label: 'Publications', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/archive', label: 'Archive', position: 'left'},
        {
          href: 'https://github.com/jonniespratley',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/jonniespratley/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site',
          items: [
            {label: 'Projects', to: '/projects'},
            {label: 'Publications', to: '/publications'},
            {label: 'Blog', to: '/blog'},
            {label: 'Archive', to: '/archive'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jonniespratley',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/jonniespratley/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jonnie Spratley`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
