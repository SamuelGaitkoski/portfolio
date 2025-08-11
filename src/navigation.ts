import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about')
    },
    {
      text: 'Projects',
      href: getPermalink('/about')
    },
    {
      text: 'Contact',
      href: getPermalink('/contact')
    }
  ]
};

export const footerData = {
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/samuel-gaitkoski/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/SamuelGaitkoski' }
  ],
  footNote: `
    &copy; {today.getFullYear()} Samuel Gaitkoski de Almeida. All rights reserved.
  `,
};
