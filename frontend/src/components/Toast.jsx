import { useEffect } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export default function Toast() {
  useEffect(() => {
    const primary = getComputedStyle(document.documentElement).getPropertyValue('--aw-color-primary');

    const notyf = new Notyf({
      duration: 3000,
      position: { x: 'right', y: 'top' },
      types: [
        {
          type: 'success',
          background: primary,
          icon: false,
        },
        {
          type: 'error',
          background: primary,
          icon: false,
        },
      ],
    });

    window.showToast = (type, message) => {
      notyf[type](message);
    };
  }, []);

  return null;
}
