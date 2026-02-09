import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Projects',
      href: getPermalink('/projects'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const socialLinks = [
  {
    ariaLabel: 'LinkedIn',
    text: 'LinkedIn',
    icon: 'mdi:linkedin',
    href: 'https://www.linkedin.com/in/samuel-gaitkoski/',
  },
  {
    ariaLabel: 'Github',
    text: 'Github',
    icon: 'mdi:github',
    href: 'https://github.com/SamuelGaitkoski',
  },
];