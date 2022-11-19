export default defineAppConfig({
  docus: {
    title: 'Presswind, WordPress Starter Theme TailwindCSS and ViteJS',
    description:
      'Presswind is a WordPress Starter Theme based on TailwindCSS and ViteJS.',
    url: 'https://presswind-doc.wp-performance.com',
    image: '/screenshot.png',
    socials: {
      github: 'WP-Performance',
    },
    github: {
      root: 'content',
      edit: true,
      contributors: false,
    },
    aside: {
      level: 1,
      filter: [],
    },
    header: {
      title: 'PressWind',
      logo: true,
      showLinkIcon: true,
    },
    footer: {
      credits: {
        text: 'wp-performance.com',
        icon: false,
        href: 'https://wp-performance.com',
      },
      icons: [],
    },
  },
})
