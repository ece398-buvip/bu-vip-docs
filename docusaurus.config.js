// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ECE 398 VIP Technical Docs',
  tagline: 'Vertically Integrated Projects',
  favicon: 'img/favicon.ico',
  markdown : {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],
  trailingSlash: true,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://litemage.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bu-vip-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'litemage', // Usually your GitHub org/user name.
  projectName: 'bu-vip-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Litemage/bu-vip-docs/blob/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode:
      {
        defaultMode: 'dark',
        respectPrefersColorScheme: true
      },
      // Replace with your project's social card
      navbar: {
        title: 'ECE 398 Vertically Integrated Projects',
        logo: {
          alt: 'argos dog logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About Us',
            items: [
              {
                label: 'BU VIP Website',
                href: 'https://vip.bradley.edu/'
              },
              {
                label: 'Contact',
                href: 'https://vip.bradley.edu/contact/'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
               href: 'https://github.com/imtiazatbradley/',
              },
            ],
          },
          {
            title: 'Explore',
            items: [
              {
                label: 'Bradley University Electrical Engineering Department',
                href: 'https://www.bradley.edu/academics/departments/electrical-and-computer-engineering/',
              },
              {
                label: 'Bradley University',
                href: 'https://www.bradley.edu',
              }
            ],
          },
        ],
        copyright: `Vertically Integrated Projects - Bradley University Electrical Engineering Department`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
