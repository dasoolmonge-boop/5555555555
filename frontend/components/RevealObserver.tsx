'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach(el => observer.observe(el));

    // Optional: Re-observe if content changes
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll('[data-reveal]:not(.observed)').forEach(el => {
        observer.observe(el);
        el.classList.add('observed');
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
