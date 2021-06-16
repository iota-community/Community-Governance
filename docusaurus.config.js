/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'IOTA Community Governance',
  tagline: 'DAO and more!',
  url: 'https://github.com/iota-community/Community-Governance',
  baseUrl: '/Community-Governance/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iota-community', // Usually your GitHub org/user name.
  projectName: 'Community-Governance', // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'X-Team Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Docs',
        },
        {
          to: '/team',
          position: 'right',
          label: 'Team',
        },
        {
          href: 'https://github.com/iota-community/Community-Governance',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'X-Team',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Docs',
              to: '/docs/intro',
            },
            {
              label: 'Team',
              to: '/Team',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/iota-community/Template_IOTA-X-Team-Initiative',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/iota',
            },
            {
              label: 'Discord',
              href: 'https://discord.iota.org',
            },
            {
              label: 'Stack Exchange',
              href: 'https://iota.stackexchange.com/',
            },
          ],
        },
        {
          title: 'More IOTA',
          items: [
            {
              label: 'Website',
              href: 'https://www.iota.org',
            },
            {
              label: 'Blog',
              href: 'https://blog.iota.org',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/iotaledger',
            },
          ],
        },
      ],
      copyright: `Made with ❤ by the IOTA Community.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/iota-community/Community-Governance/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/iota-community/Community-Governance/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
