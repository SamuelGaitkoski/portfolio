import { getPermalink } from './utils/permalinks';

const currentYear = new Date().getFullYear();

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about')
    },
    {
      text: 'Projects',
      href: getPermalink('/projects')
    },
    {
      text: 'Contact',
      href: getPermalink('/contact')
    }
  ]
};

export const footerData = {
  socialLinks: [
    { 
      ariaLabel: 'LinkedIn', 
      icon: 'tabler:brand-linkedin', 
      href: 'https://www.linkedin.com/in/samuel-gaitkoski/' 
    },
    { 
      ariaLabel: 'Github', 
      icon: 'tabler:brand-github', 
      href: 'https://github.com/SamuelGaitkoski' 
    }
  ],
  footNote: `
    &copy; ${currentYear} Samuel Gaitkoski de Almeida. All rights reserved.
  `,
};
