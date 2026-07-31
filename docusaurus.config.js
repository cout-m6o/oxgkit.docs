// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

const translateTexts = [
  {
    desc: "doc label",
    text: "文檔"
  },
  {
    desc: "blog label",
    text: "博客"
  }
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OxGKit',
  tagline: 'Unity Toolkit',
  favicon: 'img/oxgkit_logo_v1.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/build/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'michael811125', // Usually your GitHub org/user name.
  projectName: 'oxgkit.docs', // Usually your repo name.

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hans', 'zh-Hant', 'en'],
    localeConfigs: {
      'zh-Hans': {
        label: '簡體中文',
        htmlLang: 'zh-cn',
      },
      'zh-Hant': {
        label: '繁體中文',
        htmlLang: 'zh-tw',
      },
      en: {
        label: 'English',
        htmlLang: 'en-us',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/michael811125/oxgkit.docs/tree/master/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'latest',
            },
          }
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/michael811125/oxgkit.docs/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-image-zoom',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 圖片點擊放大 (medium-zoom)
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(30, 30, 30)',
        },
        config: {
          margin: 24,
        },
      },
      // Replace with your project's social card
      image: 'img/oxgkit_logo_v1.png',
      navbar: {
        title: 'OxGKit',
        logo: {
          alt: 'OxGKit Logo_v1',
          src: 'img/oxgkit_logo_v1.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: false,
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: translateTexts[0].text,
          },
          {
            to: '/blog',
            label: translateTexts[1].text,
            position: 'left'
          },
          {
            href: 'https://github.com/michael811125/OxGKit',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: translateTexts[0].text,
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Repositories',
            items: [
              {
                label: 'OxGFrame',
                href: 'https://github.com/michael811125/OxGFrame',
              },
              {
                label: 'OxGKit',
                href: 'https://github.com/michael811125/OxGKit',
              },
              {
                label: 'LWMyBox',
                href: 'https://github.com/michael811125/LWMyBox',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/jyJmWhRAv7',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: translateTexts[1].text,
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/michael811125/OxGKit',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/michael811125">MichaelO</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'cpp'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'EX73BZFPFR',

        // Public API key: it is safe to commit it
        apiKey: '86fa4af760d5d41d558779bf64fcc813',

        indexName: 'oxgkit-ouhiyo',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),

  // Custom scripts
  // scripts: [
  //   {
  //     src: './js/global.js',
  //     async: true,
  //   },
  // ],
};

export default config;
