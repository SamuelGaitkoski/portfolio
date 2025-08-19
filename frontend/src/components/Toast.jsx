import { useEffect } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export default function Toast() {
  useEffect(() => {
    const notyf = new Notyf({
      duration: 3000,
      position: { x: 'right', y: 'top' },
      types: [
        { type: 'success', background: document.documentElement.classList.contains('dark') ? '#16a34a' : '#22c55e', icon: false },
        { type: 'error', background: document.documentElement.classList.contains('dark') ? '#dc2626' : '#ef4444', icon: false },
      ],
    });

    window.showToast = (type, message) => {
      notyf[type](message);
    };
  }, []);

  return null;
}